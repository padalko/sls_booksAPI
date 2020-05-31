/* eslint-disable no-unused-vars */
const schema = require('./schema');
const { bookFixtures } = require('../../test/fixtures');
const { validateEvent } = require('../utils/validators');
const { handleError } = require('../utils/errorHandler');

const list = async (event, context) => ({
  statusCode: 200,
  body: JSON.stringify(bookFixtures.initialBooksData),
});

const get = async (event, context) => {
  try {
    validateEvent(event, schema.getById);
    const { bookUuid = '' } = event.pathParameters;
    return {
      statusCode: 200,
      body: JSON.stringify(bookFixtures.singleBookDoc),
    };
  } catch (error) {
    return handleError({ error });
  }
};

const create = async (event, context) => {
  try {
    validateEvent(event, schema.create);
    return {
      statusCode: 200,
      body: JSON.stringify(bookFixtures.singleBookDoc),
    };
  } catch (error) {
    return handleError({ error });
  }
};

const updateById = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    validateEvent({ ...event, body }, schema.updateById);
    const { bookUuid = '' } = event.pathParameters;
    return {
      statusCode: 200,
      body: JSON.stringify(bookFixtures.singleBookDoc),
    };
  } catch (error) {
    return handleError({ error });
  }
};

const deleteBookById = async (event, context) => {
  try {
    validateEvent(event, schema.deleteBookById);
    const { bookUuid = '' } = event.pathParameters;
    return {
      statusCode: 200,
      body: JSON.stringify(bookFixtures.singleBookDoc),
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
