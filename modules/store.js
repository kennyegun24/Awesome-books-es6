export default class Store {
  getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  addBook = (book) => {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  removeBook = (id) => {
    let books = this.getBooks();
    books = books.filter((book) => book.id !== +id);
    localStorage.setItem('books', JSON.stringify(books));
  }
}