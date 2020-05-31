/* eslint-disable no-unused-vars */
const _ = require('lodash');
const schema = require('./schema');
const { validateEvent } = require('../utils/validators');
const { handleError } = require('../utils/errorHandler');
const bookService = require('../service/books');

const list = async (event, context) => {
  try {
    const books = await bookService.getAllBooks();
    return {
      statusCode: 200,
      body: JSON.stringify(books),
    };
  } catch (error) {
    return handleError({ error });
  }
};

const get = async (event, context) => {
  try {
    validateEvent(event, schema.getById);
    const { bookUuid } = event.pathParameters;
    const bookObject = await bookService.getById(bookUuid);

    if (_.isEmpty(bookObject)) {
      return { statusCode: 404 };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(bookObject),
    };
  } catch (error) {
    return handleError({ error });
  }
};

const create = async (event, context) => {
  try {
    validateEvent(event, schema.create);
    const body = JSON.parse(event.body);
    const createdBookUUID = await bookService.createBook(body);

    return {
      statusCode: 201,
      body: JSON.stringify({ id: createdBookUUID }),
    };
  } catch (error) {
    return handleError({ error });
  }
};

const updateById = async (event, context) => {
  try {
    validateEvent(event, schema.updateById);
    const body = JSON.parse(event.body);
    const { bookUuid } = event.pathParameters;
    const updatedBookObject = await bookService.updateById(bookUuid, body);

    return {
      statusCode: 200,
      body: JSON.stringify(updatedBookObject),
    };
  } catch (error) {
    return handleError({ error });
  }
};

const deleteBookById = async (event, context) => {
  try {
    validateEvent(event, schema.deleteBookById);
    const { bookUuid } = event.pathParameters;
    const bookObject = await bookService.deleteById(bookUuid);

    if (!bookObject) {
      return { statusCode: 404 };
    }

    return {
      statusCode: 204,
    };
  } catch (error) {
    return handleError({ error });
  }
};

module.exports = {
  get,
  list,
  create,
  update: updateById,
  delete: deleteBookById,
};
