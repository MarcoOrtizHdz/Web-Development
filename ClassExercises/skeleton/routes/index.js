var express = require("express");
var app = express();

app.get("/", (req, res) => {
    /* 
        Lógica para obtener el nombre del usuario
    */
    var user = 'Pedro';

    //res.send("Bienvenido a Home");
    res.render('pages/home', {title:'Home', usuario: user});
})

app.get("/altas", (req, res) => {
    res.send("Bienvenido a Altas");
})

module.exports = app;