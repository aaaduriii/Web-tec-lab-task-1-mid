let books = [];

function addBook() {
    let bookInput = document.getElementById("book");
    let bookTitle = bookInput.value.trim();

    if (bookTitle === "") {
        alert("Please enter a book title.");
        return;
    }

    if (books.length >= 3) {
        alert("You can borrow a maximum of 3 books.");
        return;
    }

    books.push(bookTitle);
    bookInput.value = "";

    alert("Book Added");
}

function confirmBorrow() {
    let studentName = document
        .getElementById("studentName")
        .value.trim();

    if (studentName === "" || books.length === 0) {
        alert("Please enter your name and add at least one book.");
        return;
    }

    localStorage.setItem("studentName", studentName);
    localStorage.setItem("books", JSON.stringify(books));

    window.location.href = "receipt.html";
}
