const initialBooksData = [
  {
    authorName: 'Ernest Hemingway',
    uuid: '234',
    name: 'Farewell to Arms',
    releaseDate: +new Date('2003-04-01'),
  },
  {
    authorName: 'Julio Cortazar',
    uuid: '123',
    name: 'Rayella',
    releaseDate: +new Date('1976-01-01'),
  },
];

const singleBookDoc = {
  authorName: 'Julio Cortazar',
  uuid: '123',
  name: 'Rayella',
  releaseDate: +new Date('1976-01-01'),
};

module.exports = {
  singleBookDoc,
  initialBooksData,
};
