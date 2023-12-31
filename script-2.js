// Checking if local storage is empty then add an empty array
if (localStorage.getItem("Added Books") == null) {
  localStorage.setItem("Added Books", JSON.stringify([]));
}

// store data into local storage
const storeData = JSON.parse(localStorage.getItem("Added Books"));

function updateData() {
  localStorage.setItem("Added Books", JSON.stringify(storeData));
}

// Getting values from input fields
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const title = document.querySelector(".title");
  const author = document.querySelector(".author");
  e.preventDefault();
  addNewdata(title.value, author.value);
});

function createBooks(arr) {
  let books = "";
  for (let i = 0; i < arr.length; i += 1) {
    books += `
        ${arr[i].title}<br>
        ${arr[i].author}<br>
        <button onclick="removeBook('${i}')">Remove</button>
        <hr/>
        `;
  }
  return books;
}

// Displaying data to the UI from local storage
function displayBooks() {
  const listOfBooks = document.querySelector(".container");
  listOfBooks.innerHTML = `
           <p>
            ${createBooks(storeData)}
            </p>
    `;
}

// Adding new data in the local storage

function addNewdata(bookTitle, bookAuthor) {
  const Book = {
    title: bookTitle,
    author: bookAuthor,
  };
  storeData.push(Book);
  updateData();
  displayBooks();
}

// Removing data from local storage
function removeBook(i) {
  storeData.splice(i, 1);
  updateData();
  displayBooks();
}

window.onload = displayBooks();
