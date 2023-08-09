class BookManager {
  constructor() {
    this.storeKey = "Added Books";
    this.storeData = JSON.parse(localStorage.getItem(this.storeKey)) || [];
    this.form = document.querySelector("form");
    this.listOfBooks = document.querySelector(".container");

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addNewData();
    });

    this.displayBooks();
  }

  updateData() {
    localStorage.setItem(this.storeKey, JSON.stringify(this.storeData));
  }

  createBooks() {
    let books = "";
    for (let i = 0; i < this.storeData.length; i += 1) {
      books += `
          ${this.storeData[i].title}<br>
          ${this.storeData[i].author}<br>
          <button onclick="bookManager.removeBook('${i}')">Remove</button>
          <hr/>
        `;
    }
    return books;
  }

  displayBooks() {
    this.listOfBooks.innerHTML = `
        <p>
          ${this.createBooks()}
        </p>
      `;
  }

  addNewData() {
    const title = document.querySelector(".title");
    const author = document.querySelector(".author");
    const book = {
      title: title.value,
      author: author.value,
    };
    this.storeData.push(book);
    this.updateData();
    this.displayBooks();
    title.value = "";
    author.value = "";
  }

  removeBook(i) {
    this.storeData.splice(i, 1);
    this.updateData();
    this.displayBooks();
  }
}
/* eslint-disable no-unused-vars */
const bookManager = new BookManager();
