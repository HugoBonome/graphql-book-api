const authors = [
  { id: 'author-1', firstName: 'Joshua', lastName: 'Bloch' },
  { id: 'author-2', firstName: 'Douglas', lastName: 'Adams' },
  { id: 'author-3', firstName: 'Bill', lastName: 'Bryson' },
];

function getAuthorById(id) {
  return authors.find(author => author.id === id);
}

function getAllAuthors() {
  return authors;
}

module.exports = { getAuthorById, getAllAuthors };
