const inputDiv = document.querySelector(".input-div")
const inputTask = document.querySelector(".input-task")
const addTaskButton = document.querySelector(".add-btn")
const addIcon = document.querySelector(".add-icon")
const  todoList = document.querySelector(".todos")
let todoValue = [];


let displayChecker = true
addTaskButton.addEventListener("click", (e) => {
    e.preventDefault()
    inputDiv.style = displayChecker ? "display: block" : "display: none" 
   
})


inputTask.addEventListener("change", (event) => {
    let {value} = event.target
    // todoValue = value
    todoValue.push({value: value, date: new Date().getDay()})
    value = ""
})
addIcon.addEventListener("click", () => {
    todoList.append(todoValue)
    
})

console.log(todoValue)
