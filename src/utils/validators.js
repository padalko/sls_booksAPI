const _ = require('lodash');
const Joi = require('@hapi/joi');

const { ValidationError } = require('../errors');

const validateSchema = (e, schema) => {
  const schemaToValidate = _.isEmpty(schema) ? Joi.object().unknown() : schema;
  const result = Joi.validate(e, schemaToValidate);
  const isValid = result.error === null;
  const errors = isValid
    ? null
    : result.error.details.map((detail) => detail.message);

  return { result: result.value, isValid, errors };
};

const validateEvent = (e, schema) => {
  const { result, isValid, errors } = validateSchema(e, schema);
  if (!isValid) {
    throw new ValidationError({
      message: errors.join(', '),
      data: errors,
    });
  }

  return result;
};

module.exports = {
  validateEvent,
};
