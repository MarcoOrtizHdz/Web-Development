var mongoose = require("mongoose");

var connection = "mongodb://127.0.0.1:27017/tienda2";

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(err));

var db = mongoose.connection;

// Conexión a la BD
db.once("open", function() {
    console.log("Database connected to: " + connection);
})

db.on("error", function() {
    console.log("error");
})