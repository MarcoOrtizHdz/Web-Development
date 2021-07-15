$(document).ready(function() {
    
    // Así se haría uno por uno, pero podemos hacer una función (populateButtons)
    /*var a = $("<button>");
    a.text("dog");
    $("#animal-buttons").append(a);*/

    var animals = [
        "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
        "bird", "ferret", "turtle", "sugar glider", "chinchilla",
        "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
        "capybara", "teacup pig", "serval", "salamander", "frog"
    ];

    function populateButtons(array) {

        $("#animal-buttons").empty(); // Para que no se concatenen con los nuevos Items

        array.forEach(element => {
            var a = $("<button>");
            a.text(element);
            a.addClass("animal-button");
            a.attr("data-type", element);
            $("#animal-buttons").append(a);
        })
    }

    $("#animal-buttons").on("click", ".animal-button", function() {

        // Para borrar la página con el animal anterior y que no se concatene con el siguiente
        $("#animals").empty();

        // Search term
        var type = $(this).attr("data-type"); // El elemento que me está haciendo click, dame su data type
                                              // "this" te dice quién hizo el evento
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=cXTi4JMedt44Cv7wXHPblm1brV44m4xR&limit=10";
        
        $.ajax({            // Creamos un objeto para la petición
            url: queryURL,  // URL a la cual haremos la petición
            method: "GET"
        })
        .then(function(response) {      // El .then inicia una "Promesa", no se inicia hasta que termina la operación antes del ".then"
            //console.log(response);

            response.data.forEach(gif => {
                var animalDiv = $(`<div class ='animal-item'>`);
                var rating = gif.rating;

                var p = $("<p>").text("Rating: " + rating);

                var animated = gif.images.fixed_height.url;
                var still = gif.images.fixed_height_still.url;

                var animalImage = $("<img>");
                animalImage.attr("src", still);
                animalImage.attr("data-still", still);
                animalImage.attr("data-animated", animated);
                animalImage.attr("data-state", "still");
                animalImage.addClass("animal-image");

                animalDiv.append(p);
                animalDiv.append(animalImage);

                $("#animals").append(animalDiv);

            })
        })
    })

    $("#animals").on("click", ".animal-image", function() {
        
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animated"))
            $(this).attr("data-state", "animated")
        }
        else {
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state", "still")
        }
    })

    $("#add-animal").on("click", function(e) {
        e.preventDefault(); // Para evitar que el botón recargue la página

        var newItem = $("input").val();

        animals.push(newItem);
        $("#animal-input").val('');
        populateButtons(animals);

    })

    populateButtons(animals);
    
});
