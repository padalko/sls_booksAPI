const dao = require('../dao/books');
const Book = require('../dao/book.model');

const createBook = async (params) => {
  const bookObj = new Book(params);
  try {
    await dao.create(bookObj);
    return bookObj.id;
  } catch (daoError) {
    console.error('Unable to create a new book object.');
    throw daoError;
  }
};

const updateById = async (bookUuid, payload) => {
  const bookObj = new Book({
    ...payload,
    id: bookUuid,
  });

  try {
    await dao.updateById(bookObj);
    return bookObj;
  } catch (daoError) {
    console.error('Unable to update a book object.');
    throw daoError;
  }
};

const getAllBooks = async () => dao.list();

const getById = async (bookId) => dao.getById(bookId);

const deleteById = async (bookId) => dao.deleteById(bookId);

module.exports = {
  getById,
  createBook,
  deleteById,
  updateById,
  getAllBooks,
};
