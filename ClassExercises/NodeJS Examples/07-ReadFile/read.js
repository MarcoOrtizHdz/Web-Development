// https://nodejs.org/docs/latest-v15.x/api/fs.html#:~:text=fs.Dirent%3E%20objects.-,fs.readFile(path%5B%2C%20options%5D%2C%20callback),-%23

var fs = require("fs");

fs.readFile("movies.txt", "utf8", function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        var datos = data.toString().split(",");
        console.log(datos);
    }
})
