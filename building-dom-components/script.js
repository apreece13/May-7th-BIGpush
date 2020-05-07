const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
];

// Sarah's code from the first practice

// const createStudentComponent = (name, subject, info) => {
//     return `
//         <div class="student">
//             <h1>${name}</h1>
//             <section>${subject}</section>
//             <aside>${info}</aside>
//         </div>
//     `
// };

// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = `<div class="student">
//         <h1 class="xx-large passing">${students[i].name}</h1>
//         <section class="bordered dashed section--padded">${students[i].subject}</section>
//         <aside class="pushRight">${students[i].info}</aside>
//     </div>`
//     } else {
//         studentComponent = `<div class="student">
//         <h1 class="xx-large failing">${students[i].name}</h1>
//         <section class="bordered dashed section--padded">${students[i].subject}</section>
//         <aside class="pushRight">${students[i].info}</aside>
//     </div>`
//     }
    
// };





// Barry's Code - goes into the HTML file 

// const createStudentComponent = (name, subject, info) => {
//     return `
//         <div class="student">
//         <h1 class="xx-large">${name}</h1>
//             <section class= "bordered dashed section--padded">${subject}</section>
//             <aside class= "pushRight">${info}</aside>
//         </div>
//     `
// }
// for (let i = 0; i < students.length; i++) {
//     document.querySelector("#container").innerHTML += createStudentComponent(students[i].name, students[i].subject, students[i].info)
//     let studentComponent = document.querySelectorAll(".xx-large")
//     if (students[i].score >= 60) {
//         studentComponent[i].classList.add("passing")
//     } else {
//         studentComponent[i].classList.add("failing")
//     }  
// }



// Refactor Barry's code for Practice 2 // 


// const createStudentComponent = (object) => {
//     return `
//         <div class="student">
//         <h1 class="xx-large">${object.name}</h1>
//             <section class= "bordered dashed section--padded">${object.subject}</section>
//             <aside class= "pushRight">${object.info}</aside>
//         </div>
//     `
// }
// for (let i = 0; i < students.length; i++) {
//     document.querySelector("#container").innerHTML += createStudentComponent(students[i])
//     let studentComponent = document.querySelectorAll(".xx-large")
//     if (students[i].score >= 60) {
//         studentComponent[i].classList.add("passing")
//     } else {
//         studentComponent[i].classList.add("failing")
//     }  
// }
