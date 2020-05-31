const Joi = require('@hapi/joi');

const getById = Joi.object()
  .keys({
    pathParameters: {
      bookUuid: Joi.string().guid({ version: 'uuidv4' }).required(),
    },
  })
  .unknown();

const updateById = Joi.object()
  .keys({
    pathParameters: {
      bookUuid: Joi.string().guid({ version: 'uuidv4' }).required(),
    },
    body: {
      authorName: Joi.string().required(),
      name: Joi.string().required(),
      uuid: Joi.string().guid({ version: 'uuidv4' }),
      releaseDate: Joi.number().required(),
    },
  })
  .unknown();

const create = Joi.object()
  .keys({
    body: {
      authorName: Joi.string().required(),
      name: Joi.string().required(),
      releaseDate: Joi.number().required(),
    },
  })
  .unknown();

const deleteBookById = Joi.object()
  .keys({
    pathParameters: {
      bookUuid: Joi.string().guid({ version: 'uuidv4' }).required(),
    },
  })
  .unknown();

module.exports = {
  getById,
  updateById,
  deleteBookById,
  create,
};
