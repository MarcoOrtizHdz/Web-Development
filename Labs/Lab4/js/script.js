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
    
    /*
    var currentListHTML = list.innerHTML; // Get the actual state of the placeholder
    list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" /> ${to_do} <br>`; // Actual Placeholder append new TODO text
    document.getElementById("TodoText").value = "";
    */
    
    // Creacion de variables
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    // Asignación de propiedades o atributos
    checkbox.type = "checkbox";
    checkbox.name = "todo"; 
    label.textContent = to_do;

    /* Lo anterior sería como lo siguiente
    <div>
        <input type = "checkbox" name = "todo" ></input>
        <label>Elemento 1</label>
    </div>
    */

    div.appendChild(checkbox);
    div.appendChild(label);
    list.appendChild(div);

    document.getElementById("TodoText").value = "";
}

function TodoClear() {
    var todos = document.getElementsByName("todo");
    //console.log(todos);
    
    /*
    for ( var i = 0 ; i < todos.length ; i++ ) {
        todos[i].checked = false;
    }
    */
    
    // Con forEach
    todos.forEach(function(elemento) {
        elemento.checked = false;
    })
}

function TodoMark() {
    var todos = document.getElementsByName("todo");
    //console.log(todos);

    for ( var i = 0 ; i < todos.length ; i++ ) {
        todos[i].checked = true;
    }
}

function TodoDel() {
    /*
    // Si queremos borrar todos los ToDos, estén checked o no
    var list = document.getElementById("todoList");
    list.innerHTML = "";
    */

    var todos = document.getElementsByName("todo");

    todos.forEach(elemento => {
        if (elemento.checked){
            elemento.parentElement.remove();
        }
    })
}