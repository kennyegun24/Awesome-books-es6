import Store from './modules/store.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/luxon.js';

const store = new Store();
const ui = new UI();

let dt = DateTime.now();
dt = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
const date = document.querySelector('.dates');
date.innerHTML = dt;

class Book {
  constructor(title, author, id = Math.floor(Math.random() * 1000000)) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// EVENT TO DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', ui.displayBooks);
// EVENT TO ADD A BOOK
document.querySelector('.bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const titleInput = document.querySelector('.title').value;
  const authorInput = document.querySelector('.author').value;
  if (titleInput !== '' && authorInput !== '') {
    const book = new Book(titleInput, authorInput);
    ui.addBookToList(book);
    store.addBook(book);
    ui.clearFields();
  } else {
    // eslint-disable-next-line no-alert
    alert('Please enter book tile and author');
  }
});
// EVENT DELETE
document.querySelector('.books').addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    store.removeBook(e.target.id);
    ui.deleteBook(e.target);
  }
});

// const header = document.querySelector('.headerDiv');
// header.innerHTML = `

// `;

const list = document.querySelector('.list-main');
const books = document.querySelector('.books');
const awesomeBooks = document.querySelector('.awesomeBooks');
const addNew = document.querySelector('.addNew');
const bookForm = document.querySelector('.bookForm');
const contact = document.querySelector('.contactUs');
const contactUs = document.querySelector('.contact');

list.addEventListener('click', () => {
  // list.classList.toggle('list1')
  books.style.display = 'block';
  awesomeBooks.style.display = 'block';
  bookForm.style.display = 'none';
  contactUs.style.display = 'none';
});

addNew.addEventListener('click', () => {
  // addNew.classList.toggle('list1')
  bookForm.style.display = 'block';
  books.style.display = 'none';
  awesomeBooks.style.display = 'none';
  contactUs.style.display = 'none';
});

contact.addEventListener('click', () => {
  contactUs.style.display = 'flex';
  contactUs.innerHTML = `
    <div class="contactDiv">
            <h2 class="contactHeader">Contact Information</h2>
            <p class="contactParagraph">Do you have any questoin or you just wanna say "HI"? <br>
                You can reach us now!
            </p>

            <ul class="contactUl">
                <li>&nbsp; &nbsp; - &nbsp; &nbsp; &nbsp; Our email addresses -@email.com</li>
                <li>&nbsp; &nbsp; - &nbsp; &nbsp; &nbsp; Our phone numbers +2348025464789, +234 8145464613</li>
                <li>&nbsp; &nbsp; - &nbsp; &nbsp; &nbsp; Our addresses </li>
            </ul>
        </div>
    `;
  bookForm.style.display = 'none';
  awesomeBooks.style.display = 'none';
  books.style.display = 'none';
});

const footer = document.querySelector('footer');
footer.innerHTML = `
<div class="footerDiv">
<h2 class="footerHeader">
    Copyright
</h2>
</div>
</footer>`;