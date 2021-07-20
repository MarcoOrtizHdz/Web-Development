var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000; 

var usuario = {
    nombre: "Marco",
    perfil: "Admin"
}

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/home", {usuario});
})

app.get("/contact", (req, res) => {
    res.render("pages/contact");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})