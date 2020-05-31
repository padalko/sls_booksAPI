class ValidationError extends Error {
  constructor({ message, data }) {
    super(message);
    this.name = 'Validation Error';
    this.statusCode = 400;
    this.data = data;
  }

  getErrorMessage() {
    return JSON.stringify({
      ValidationError: {
        message: this.message,
        data: this.data,
      },
    });
  }
}

module.exports = ValidationError;
