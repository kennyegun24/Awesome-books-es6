import Store from './store.js';

export default class UI {
  displayBooks = () => {
    const store = new Store();
    const books = store.getBooks();
    books.forEach((books) => this.addBookToList(books));
  }

  addBookToList = (book) => {
    const books = document.querySelector('.books');
    const newBook = document.createElement('div');
    newBook.innerHTML = `
        <div>
        <div class="bookDiv">
        <h4 id="title" class="">${book.title} &nbsp; &nbsp; &nbsp; &nbsp; by &nbsp; &nbsp; &nbsp; &nbsp; ${book.author}</h4>
        <h4 class="hidy">${book.id}</h4>
        <button class="delete">Remove</button>
        </div>
        <hr class="hr">
        </div>
        `;
    newBook.classList.add('newBook');
    books.appendChild(newBook);
  }

  deleteBook = (el) => {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  clearFields = () => {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}