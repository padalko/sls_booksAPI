'use strict';
const { bookFixtures } = require('../../test/fixtures');

const list = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(bookFixtures.initialBooksData),
  };
};

const get = async (event, context) => {
  const { bookUuid = '' } = event.pathParameters;
  // validateUUID format
  return {
    statusCode: 200,
    body: JSON.stringify(bookFixtures.singleBookDoc),
  };
};

const create = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(bookFixtures.singleBookDoc),
  };
};

const updateById = async (event, context) => {
  const { bookUuid = '' } = event.pathParameters;
  // validateUUID format
  return {
    statusCode: 200,
    body: JSON.stringify(bookFixtures.singleBookDoc),
  };
};

const deleteBookById = async (event, context) => {
  const { bookUuid = '' } = event.pathParameters;
  // validateUUID format
  return {
    statusCode: 200,
    body: JSON.stringify(bookFixtures.singleBookDoc),
  };
};

module.exports = {
  get,
  list,
  create,
  update: updateById,
  delete: deleteBookById
};
