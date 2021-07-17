var express = require("express");
 
var app = express()
 
app.get("/", (req,res) =>{
    res.send("Hello");
})

app.get("/login", (req,res) =>{
    res.send("Bienvenidos a Login");
})

app.post("/about", (req,res) =>{
    res.send("POST REQUEST");
})

app.get("/registro", (req,res) =>{
    res.send("Registra tu usuario");
})

app.listen(3000, () =>{
    console.log("Server running")
});