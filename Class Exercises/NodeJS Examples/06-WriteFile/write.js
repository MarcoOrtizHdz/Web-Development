// https://nodejs.org/docs/latest-v15.x/api/fs.html#:~:text=for%20more%20details.-,fs.writeFile(file%2C%20data%5B%2C%20options%5D%2C%20callback),-%23

var fs = require("fs");

fs.writeFile("movies2.txt", "Now You See Me, Cars", function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("File Updated")
    }
})