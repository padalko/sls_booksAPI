class DBError extends Error {
  constructor({ message, data }) {
    super(message);
    this.name = 'Database Error';
    this.statusCode = 500;
    this.data = data;
  }

  getErrorMessage() {
    return JSON.stringify({
      InternalServerError: {
        message: this.message,
        data: this.data,
      },
    });
  }
}

module.exports = DBError;
