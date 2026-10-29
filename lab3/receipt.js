let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
let books = JSON.parse(localStorage.getItem("books")) || [];

let result = "<h3>Borrower Information</h3>";

result += "Name: " + name + "<br><br>";
result += "Age: " + age + "<br><br>";

document.getElementById("receiptDetails").innerHTML = result;

let bookList = document.getElementById("receiptBooks");

for (let i = 0; i < books.length; i++) {
    bookList.innerHTML += "<li>" + books[i] + "</li>";
}

document.getElementById("receiptCount").innerHTML = books.length;

let deposit = books.length * 200;

document.getElementById("receiptDeposit").innerHTML = deposit;


function goBack() {
    window.location.href = "index.html";
}