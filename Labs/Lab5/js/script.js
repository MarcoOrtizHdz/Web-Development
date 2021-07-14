// Referencias a todos los elementos con los que interectuare
var post = $("#ButtonPost").on("click", TodoPost);
var clear = $("#ButtonClear").on("click", TodoClear);
var mark = $("#ButtonMark").on("click", TodoMark);
var del = $("#ButtonDelete").on("click", TodoDel);

function TodoPost(e) {
    e.preventDefault();
    
    var to_do = $("#TodoText").val(); // Get the TODO text
    var list = $("#todoList"); // Get the list placeholder
    
    // Creacion de variables
    var div = $("<div>");
    var checkbox = $("<input>");
    var label = $("<label>");

    // Asignación de propiedades o atributos
    checkbox.attr("type", "checkbox");
    checkbox.attr("name", "todo");
    label.html(to_do);

    div.append(checkbox);
    div.append(label);
    list.append(div);

    $("#TodoText").val('');
}

function TodoClear() {
    $("[name='todo']").each(function(index, item) {
        item.checked = false;
    })
}

function TodoMark() {
    $("[name='todo']").each(function(index, item) {
        item.checked = true;
    })
}

function TodoDel() {
    $("[name='todo']").each(function(index, item){
        if (item.checked) {
            $(item).parent().remove();
        }
    })
}