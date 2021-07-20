const exp = require("constants");
var express = require("express");
var morgan = require("morgan");

var app = express();
var PORT = 3000;

app.use(morgan("dev"));
app.use('/archivos', express.static('public'));

/*
app.use(logger); // Con esto, Logger ya es parte del servidor a nivel global. Se ejecutará la función antes de cualquier ruta.
// Middleware
function logger(res, res, next) {
    console.log("Petición recibida");
    next();
}
*/
app.get("/", (req, res) => {
    res.send("Bienvenidos");
})

app.get("/usuarios", (req, res) => {
    res.send("Usuarios");
})

app.get("/admin", (req, res) => {
    res.send("Admin Page");
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})