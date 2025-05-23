const books = [
  { id: 'book-1', name: 'Effective Java', pageCount: 416, authorId: 'author-1' },
  { id: 'book-2', name: "Hitchhiker's Guide to the Galaxy", pageCount: 208, authorId: 'author-2' },
  { id: 'book-3', name: 'Down Under', pageCount: 436, authorId: 'author-3' },
];

function getBookById(id) {
  return books.find(book => book.id === id);
}

function getAllBooks() {
  return books;
}

module.exports = { getBookById, getAllBooks };
