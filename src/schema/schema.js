const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    bookById(id: ID!): Book
    allBooks: [Book]
    allAuthors: [Author]
  }

  type Book {
    id: ID
    name: String
    pageCount: Int
    author: Author
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
  }
`);

module.exports = schema;
