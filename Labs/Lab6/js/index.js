var addButton = $(".agregar").on("click", function(e) {
    e.preventDefault();
    
    if ( $("#newText").val().length > 0  ) {
        var item = $("#newText").val();
        var list = $(".Lista"); 

        var div = $(`<div class="shopItem">`);
        var li = $(`<li class="lis">`);
        var p = $(`<p class="itemShop">${item}</p>`);
        var checkBtn = $(`<button class="checar" type="text">Check</button>`);
        var delBtn = $(`<button class="del" type="text">Delete</button>`);

        li.append(p);
        li.append(checkBtn);
        li.append(delBtn);
        li.append("<p>");
        div.append(li);
        list.append(div);

        $("#newText").val('');
    }
    else {
        alert("You need to enter an item to add it to the list.");
    }
});

var checkButton = $(".Lista").on("click", ".checar", function () {
    $(this).parent().toggleClass("chec");
})

var delButton = $(".Lista").on("click", ".del", function () {
    $(this).parent().parent().remove();
})