let foodList = document.getElementsByClassName("foodList")

// This makes a request to a specific domain, port address, and resource on the Web.
// fetch("http://localhost:8088/food")
// This line of code accepts the response from your request, parses the body of the response as JSON and returns it to any subsequent then() method.
// .then(foods => foods.json())

// This line of code accepts the parsed JSON as the argument to a function, and then uses console.table() to display the results.
// .then(parsedFoods => {
//     console.table(parsedFoods)
// })


fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {

        parsedFoods.forEach(food => {
            //Print foods to DOM
            //    console.log(food.name)

            // foodList.innerHTML += food.name
            // foodList.innerHTML += food.category
            // foodList.innerHTML += food.ethnicity

        //     document.querySelector(".foodList").innerHTML += `<div class=foodStyle>
        // <h1>${food.name}</h1>
        // <h2>${food.category}</h2>
        // <h2>${food.ethnicity}</h2>
        // </div>
        // `
            // console.log(food.barcode)
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {

                    if (productInfo.product.ingredients_text) {
                        food.ingredients = productInfo.product.ingredients_text
                    } else {
                        food.ingredients = "no ingredients listed"
                    }

                    if (productInfo.product.countries_imported) {food.countries = productInfo.product.countries_imported
                    } else {
                    food.countries = "from nowhere"
                    }

                    document.querySelector(".foodList").innerHTML += `<div class=foodStyle>
                    <h1>${food.name}</h1>
                    <h2>${food.category}</h2>
                    <h2>${food.ethnicity}</h2>
                    <h2>${food.ingredients}</h2>
                    <h2>${food.countries}</h2>
                    <h2>${food.nutrition.calories}</h2>
                    </div>
                    `
                    // document.querySelector(".foodList").innerHTML+= food.ingredients

                    // console.log(food.ingredients)
                    // Build HTML string for individual food

                    // Add HTML string to DOM

                    // if(productInfo.product.ingredients){
                    //     food.
                    // }

                    console.log(productInfo.product)
                })
        })
    })

