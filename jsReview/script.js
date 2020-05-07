// // Lightning Exercise
// // String
// var firstName = "Austin"
// var lastName = "Preece"
// var age = 24
// // Boolean
// var likesTravel = true

// // Console Log
// console.log(firstName, lastName, age, likesTravel
// )

// // Array

// var choreList = ["take out the trash", "clean dishes", "wash the clothes"]

// console.log(choreList)

// console.log(choreList[1])

// var crazyArray = [1,2,3,true,false, "hi"]

// // Lightning Exercise #2

// var favoriteMovies = ["Iron Man", "Iron Man 2", "Iron Man 3"]

// console.log(favoriteMovies[0])
// console.log(favoriteMovies[1])
// console.log(favoriteMovies[2])

// // Objects

// var Mia = {
//     species:"dog",
//     likesNoise: true,  
//     age: .7,
//     toyArray: ["alligator", "bone", "sheep"],
//     peopleObject:{
//         mom: "Cas",
//         dad: "Tommy",
//     }

// }

// // Lightning Exercise #3

// var firstObject = {
//     firstName: "Austin",
//     lastName: "Preece",
//     age: 24,
//     likesTravel: true,
//     favoriteMovies: ["Iron Man", "Iron Man 2", "Iron Man 3"]
// }

// console.log (firstObject.firstName)
// console.log (firstObject.lastName)

// console.log (Mia.toyArray[1])

// // Lightning Exercise #4

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log (wardrobe.height)
// console.log (wardrobe.manufacturer)
// console.log (wardrobe.contents[0])
// console.log (wardrobe.contents[1])
// console.log (wardrobe.contents[2])
// console.log (wardrobe.contents[3])
// console.log (wardrobe.contents[4])
// console.log (wardrobe.depth)
// console.log (wardrobe.width)

// // Lightning exercise #5

// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }

// console.log(empireStateBuilding.stories)
// console.log(empireStateBuilding.height)
// console.log(empireStateBuilding.eastWestLength)
// console.log(empireStateBuilding.northSouthLength)
// console.log(empireStateBuilding.squareFeet)

// var address = "address"
// var cost = "cost"
// var owner = "owner"
// var architect = "architect"
// var constructionDate = "constructionDate"

// console.log(empireStateBuilding[address])
// console.log(empireStateBuilding[constructionDate])
// console.log(empireStateBuilding[cost])
// console.log(empireStateBuilding[owner])
// console.log(empireStateBuilding[architect])

// const beatles = {
//     albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
//     history: {
//         formed: 1960,
//         disbanded: 1970
//     },
//     members: [
//         {
//             name: "George Harrison",
//             birth: 1943,
//             death: 2001
//         },
//         {
//             name: "Paul McCartney",
//             birth: 1942,
//             death: null
//         },
//         {
//             name: "John Lennon",
//             birth: 1940,
//             death: 1980
//         },
//         {
//             name: "Ringo Starr",
//             birth: 1940,
//             death: null
//         }
//     ]
// }

// console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`) 


// Conditional

// if(2+2 === 3){
//     console.log("great at math")
// } else {
//     console.log("back to class for you")
// }

// Lightning Exercise #6

// var likesToTravel = true;

// if(likesToTravel === true){
//     console.log("Bon voyage!")
// } else {
//     console.log("Enjoy your couch!")
// }

// Fried Pickles are the Best
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.


// var favoriteFood = "eggs";

// if (favoriteFood === "eggs" || favoriteFood === "pepperoni rolls") {
//     console.log("Congratulations! You have excellent taste!")
//     else {
//     console.log("Clearly you have not tried fried pickles or pepperoni rolls.")
//     }
// }

//          Loops

// for(var i = 0; i < 10; i++){
//     console.log("Austin Preece is the best!")
// }

// Lightning Exercise #7

// Psychotic Bird
// In your JavaScript file, write a while loop that outputs the phrase "TWEET TWEET" 100 times to the console.

// for(var i = 0; i < 100; i++){
//     console.log("Tweet Tweet")
// }

// var wordArray = ["hi", "my", "name", "is", "austin"]

// for (var i=0; i<wordArray.length; i++){
//     console.log(wordArray)
// }

// Days of the Week
// In your JavaScript, create a new variable called weekArray. It should store an array of strings representing seven days of the week
// Loop through the array and print each day to the console.

// var weekArray = ["monday", "Tuesday", "wednesday", "Thursday", "Friday", "saturday", "Sunday"]

// for (var i=0; i<weekArray.length; i++){
//     console.log(weekArray[i])
// }