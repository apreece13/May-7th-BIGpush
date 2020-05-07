// Scope 

// function sayHello (){
//     var greeting = "hello"
//     console.log(greeting)
// }

// // Var is willy nilly
// var isTrustWorthy = true;

// // const is the most strict
// if(isTrustWorthy === true){
//     const secret = "I've had way too much coffee this morning"
//     console.log(secret);
// }

// // let is the middle strict
// if (isTrustWorthy === true){
//     let secret = "I've had way too much coffee this morning"
//     isTrustWorthy = false;
// }

// console.log("is it trustworthy?", isTrustWorthy)


// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
// let sentenceBeginning = "The symtoms of Covid-19 are"
// let symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
// const mySymtoms = [];
// This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
// for(let i = 0; i < symtoms.length; i++){
//     sentenceBeginning += ` ${symtoms[i]}`
//     mySymtoms.push(symtoms[i])
// }
// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors
//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file

// let taco;
// function tacoTruck(shellType, toppings){
//     taco = `A ${shellType} taco with ${toppings}`
    
// }
// tacoTruck("soft, beef and cheese")
// console.log(taco);

// Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages

// Write a function that accepts two parameters, first and last name. The function should return a greeting to that person using their full name. Then log the greeting to the console outside the function

// var firstName = "Austin"

// var lastName = "Preece"

// function sayName (firstName, lastName){
//     const nameSentence = `Hello, ${firstName} ${lastName}`
//     return nameSentence;
// }

// console.log(sayName("Austin", "Preece"))

// Exercise: ChickenMonkey

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 1 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
//     if(currentNumber % 5 === 0){
//         console.log("Chicken")
//     }
//     if (currentNumber % 7 === 0){
//         console.log("Monkey")
//     }
//     if(currentNumber % 5 === 0, currentNumber % 7 === 0){
//         console.log("ChickenMonkey")
//     }
// }


// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// let bandNumber = 1

// const takeNumber = function (bandName) {
//    const printSentence = `${bandNumber}. ${bandName}`
//    bandNumber = bandNumber+1;
//     return printSentence;
// }


// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// // An array that is grouping the objects together.
// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
// const cookedFood = [];

// function grill (currentObject) {
//     // Modify the food so that it is cooked
//     currentObject.cooked = true;

//     // Put the cooked food into the appropriate array
//     cookedFood.push(currentObject);
// };

// console.log(cookedFood)

// for (let i = 0; i < foods.length; i++){
//     grill(foods[i])
// }

// console.log(cookedFood)


// Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         if (i % 3 === 0 && i!=0){ buildMeUp = buildMeUp +"! "+ theWordArray[i]
//         // Print buildMeUp to the console
//         console.log(buildMeUp)

//         }
//         else{

        

//         // Concatenate the new word onto buildMeUp
//         buildMeUp = buildMeUp +" "+ theWordArray[i]
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//         }
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)