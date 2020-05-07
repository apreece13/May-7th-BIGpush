function restaurantsSearch(){
fetch("http://localhost:8088/restaurants")
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
        console.table(parsedRestaurants)
        parsedRestaurants.forEach(element => {
            document.querySelector("#printHere").innerHTML += `<li>${element.restaurant.name}</li>`
            
            console.log(element)
        });
    })}

    restaurantsSearch("")