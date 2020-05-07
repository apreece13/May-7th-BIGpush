document.querySelector("#my-todo-list").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>My To Do List</h1>`
})

document.querySelector("#family-todo-list").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>Family To Do List</h1>`
})

document.querySelector("#completed-tasks").addEventListener("click", function(){
    document.querySelector("#page-content").innerHTML = `<h1>Completed Tasks</h1>`
})