// const me = {
//     firstName: "Austin",
//     lastName: "Preece",
//     hobbies: ["eating", "yoga", "soccer"],
//     lovesMaggie: true,
//     timeToWork: function () {
//         console.log("Sit down and focus")
//     }
// }

// // console.log(me.timeToWork)

// me.timeToWork()

// const rufusTheDog = {
//     age: 4,
//     species: "Dalmatian",
//     bark: function (){
//         window.alert("WOOF")
//     },
//     contentsOfStomach:[],
//     eat: function(item){
//         // rufusTheDog.contentsOfStomach.push(item)
//         this.contentsOfStomach.push(item)
//     },
//     puke: function(){
//         rufusTheDog.contentsOfStomach.length = 0
//     },
// }

// // rufusTheDog.bark()

// rufusTheDog.eat("snacks")
// rufusTheDog.eat("a bone")
// rufusTheDog.eat("a stick")

// console.log("this is the contents of rufus's stomach", rufusTheDog.contentsOfStomach)

const myPet = {
    name: "Maggie",
    species: "mut",
    nicknames: ["Maggie May", "Turd Burglar", "The Stink"],
    age: 14,
    tailWag: function(){
        window.alert("WAG WAG WAG")
    },
    rollOver: function(){
        console.log("Roll Over!")
    },
    sickBalls:function(){
        console.log("Sick Balls!")
    },


    favoriteToys: [],
    
    play: function(toy, likesToy){
        

    // if (toy.includes("fuzzy"))       //likesToy === true {
    //     {this.favoriteToys.push(toy),

    //     console.log("Maggie likes to play with her", toy)
    // } else {
    //     console.log("Maggie does not like to play with it", toy)
    // }

        if (likesToy === true) {
            this.favoriteToys.push(toy)
        }



},


}

// myPet.play("fuzzy ball")
// myPet.play("ball")
myPet.play("stick", false)
console.log(myPet.favoriteToys)
myPet.rollOver()
myPet.sickBalls()
// myPet.tailWag()
