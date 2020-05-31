const AWS = require('aws-sdk');
const { DBError } = require('../errors');

let options = {};
if (process.env.IS_OFFLINE) {
  options = {
    tableName: 'library-api-booksTable-dev',
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  };
  AWS.config.update(options);
}

const dynamoDb = new AWS.DynamoDB.DocumentClient(options);

/**
 * Gets all book records from table
 * @returns {Array}
 */
const list = async () => {
  const params = {
    TableName: process.env.DYNAMODB_BOOKS_TABLE,
  };

  try {
    const books = await dynamoDb.scan(params).promise();
    return books.Items;
  } catch (error) {
    console.error('dao.list: db retrieve failed', { err: error.toString() });
    return new DBError({
      message: 'Failed to list books.',
    });
  }
};

/**
 * Creates new book record in table
 * @param bookObj
 * @returns {Object} new book object
 */
const create = async (bookObj) => {
  const params = {
    TableName: process.env.DYNAMODB_BOOKS_TABLE,
    Item: bookObj.toObject(),
  };
  try {
    return dynamoDb.put(params).promise();
  } catch (error) {
    console.error('dao.create: create new book failed', {
      err: error.toString(),
    });
    return new DBError({
      message: 'Create new book failed.',
      data: bookObj,
    });
  }
};

/**
 * Deletes book record from dynamoDB table
 * @param bookUuid
 * @returns {Promise}
 */
const deleteById = async (bookUuid) => {
  const params = {
    TableName: process.env.DYNAMODB_BOOKS_TABLE,
    Key: {
      id: bookUuid,
    },
  };

  try {
    return dynamoDb.delete(params).promise();
  } catch (error) {
    console.error('dao.deleteById: delete new book failed', {
      err: error.toString(),
    });
    return new DBError({
      message: 'delete book from DB failed.',
      data: bookUuid,
    });
  }
};

/**
 * Updates book record in dynamoDB table by id
 * @param bookObj
 * @returns {Object}
 */
const updateById = async (bookObj) => {
  const params = {
    TableName: process.env.DYNAMODB_BOOKS_TABLE,
    Key: {
      id: bookObj.id,
    },
    ExpressionAttributeNames: {
      '#book_name': 'name',
      '#book_releaseDate': 'releaseDate',
      '#book_authorName': 'authorName',
    },
    ExpressionAttributeValues: {
      ':authorName': bookObj.authorName,
      ':releaseDate': bookObj.releaseDate,
      ':name': bookObj.name,
    },
    UpdateExpression:
      'SET #book_name = :name, #book_releaseDate = :releaseDate, #book_authorName = :authorName',
    ReturnValues: 'ALL_NEW',
  };
  return dynamoDb.update(params).promise();
};

/**
 * Gets book record in dynamoDB table by id
 * @param bookUuid
 * @returns {Object}
 */
const getById = async (bookUuid) => {
  const params = {
    TableName: process.env.DYNAMODB_BOOKS_TABLE,
    Key: {
      id: bookUuid,
    },
  };

  try {
    return dynamoDb.get(params).promise();
  } catch (error) {
    console.error('dao.getById: get book by id failed', {
      err: error.toString(),
      bookUuid,
    });
    return new DBError({
      message: 'Retrieve book by ID failed.',
      data: bookUuid,
    });
  }
};

module.exports = {
  create,
  deleteById,
  updateById,
  getById,
  list,
};
