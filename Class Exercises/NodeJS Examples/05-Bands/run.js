var bandList = require("./bands.js");

var search = process.argv[2];

for (var genero in bandList) {

    if (genero === search) {
        console.log(`A ${genero} band is ${bandList[genero]}`);
    }
    
}