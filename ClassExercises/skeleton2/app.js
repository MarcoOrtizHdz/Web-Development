require('./connection');

var Product = require("./models/Product");
var Usuario = require("./models/Usuarios");

/*
var productA = new Product ({
    name: "silla",
    description: "silla en venta"
})

var productB = new Product ({
    name: "mouse",
    description: "mouse 2",
    price: 200
})
*/

var usuario = new Usuario ({
    email: "email@gmail.com",
    password: "myPassword"
})


// Se manda a la BD
/*
productB.save(function(err, document) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(document);
    }
})*/

usuario.save();