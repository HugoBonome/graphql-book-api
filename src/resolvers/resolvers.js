const { getBookById, getAllBooks } = require('../data/books');
const { getAuthorById, getAllAuthors } = require('../data/authors');

const resolvers = {
  bookById: ({ id }) => {
    return getBookById(id);
  },
  allBooks: () => {
    return getAllBooks();
  },
  allAuthors: () => {
    return getAllAuthors();
  },
  Book: {
    author: (book) => {
      return getAuthorById(book.authorId);
    }
  }
};

module.exports = resolvers;
