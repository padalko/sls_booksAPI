const uuid = require('uuid');

class Book {
  constructor(params) {
    const { id, name, authorName, releaseDate } = params;
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.authorName = authorName;

    if (!this.id) {
      this.generateId();
    }
  }

  generateId() {
    this.id = uuid.v4();
  }

  toObject() {
    return {
      name: this.name,
      id: this.id,
      releaseDate: this.releaseDate,
      authorName: this.authorName,
    };
  }
}

module.exports = Book;
