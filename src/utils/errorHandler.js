const errors = require('../errors');

const handleError = ({ error, status = 500 }) => {
  if (error instanceof errors.ValidationError) {
    return {
      statusCode: error.statusCode,
      body: error.getErrorMessage(),
    };
  }

  return {
    statusCode: error.statusCode || status,
    body: error.message || JSON.stringify(error),
  };
};

module.exports = {
  handleError,
};
