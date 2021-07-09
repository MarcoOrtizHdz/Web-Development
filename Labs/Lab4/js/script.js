// Referencias a todos los elementos con los que interectuare
var post = document.getElementById("ButtonPost");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e) {
    e.preventDefault();
    
    var to_do = document.getElementById("TodoText").value; // Get the TODO text
    var list = document.getElementById("todoList"); // Get the list placeholder

    var currentListHTML = list.innerHTML; // Get the actual state of the placeholder
    list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" /> ${to_do} <br>`; // Actual Placeholder append new TODO text
    document.getElementById("TodoText").value = "";
}

function TodoClear() {
    
}

function TodoMark() {
    
}

function TodoDel() {
    
}