const writeTodo = document.querySelector(".todo-container .add-input");
const addbtn = document.querySelector(".add-btn");
const liContainer = document.querySelector(".task-list-container ul");

let tasks = [];

window.addEventListener('DOMContentLoaded',()=>{
    let stored = localStorage.getItem('tasks')
    tasks = stored?JSON.parse(stored):[];
    renderTasks()
})

addbtn.addEventListener('click',addTodo)
window.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        addTodo()
    }
})

function addTodo(){
    const taskText = writeTodo.value.trim()
    if(!taskText) return alert(`Don't give empty string in the todo!!!`)

        const newTask = {
            text:taskText,
            completed:false,
        };

        tasks.push(newTask);
        saveTasks()
        renderTasks();
        writeTodo.value = '';

}


function renderTasks(){

    liContainer.innerHTML = ''

    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        const todoText =document.createTextNode(task.text);
        const checkBox = document.createElement('i');
        const remove = document.createElement('i');

        checkBox.classList.add("bx", task.completed ? "bx-check-circle" : "bx-radio-circle", "checkbox");
        remove.classList.add("bx", "bx-trash-x", "remove");


        if(task.completed) li.classList.add('checked')
        li.appendChild(checkBox)
        li.appendChild(todoText); 
        li.appendChild(remove)
        liContainer.appendChild(li);

        checkBox.addEventListener('click',()=>{
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });


        remove.addEventListener('click',()=>{
            tasks.splice(index,1);
            saveTasks()
            renderTasks()
        })

    })

    
    
}  




function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

