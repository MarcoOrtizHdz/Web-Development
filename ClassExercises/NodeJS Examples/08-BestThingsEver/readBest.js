var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        var datos = data.toString().split(", ");
        
        /*for ( var i = 0 ; i < datos.length ; i++ ) {
            console.log(datos[i]);
        }*/

        datos.forEach(element => console.log(element));
    }
})
