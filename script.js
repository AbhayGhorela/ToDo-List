const writeTodo = document.querySelector(".todo-container .add-input");
const addbtn = document.querySelector(".add-btn");
const liContainer = document.querySelector(".task-list-container ul");


function addTodo(){
    if (writeTodo.value != "") {
    const li = document.createElement("li");
    const todo =document.createTextNode(writeTodo.value)
    const checkBox = document.createElement('i')
    const remove = document.createElement('i')
    checkBox.classList.add('bx','bx-radio-circle','checkbox')
    remove.classList.add('bx','bx-trash-x','remove')
    li.appendChild(checkBox)
    li.appendChild(todo); 
    li.appendChild(remove)
    liContainer.appendChild(li);
    writeTodo.value = "";
    getData()

    // checked todo
    li.addEventListener('click',()=>{
        li.classList.toggle('checked')
        const isChecked = li.classList.contains('checked')
        checkBox.classList.toggle('bx-radio-circle',!isChecked)
        checkBox.classList.toggle('bx-check-circle',isChecked)
        getData()
    })

    // remove todo
    remove.addEventListener('click',()=>{
        li.remove()
        getData()
    })
  }else{
    alert("Dont give empty String in the todo!!!")
  }
}

addbtn.addEventListener("click", () => {
  addTodo()
});

window.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        addTodo()
    }
})


function getData(){
    localStorage.setItem('data',liContainer.innerHTML)
}

function showData(){
    liContainer.innerHTML = localStorage.getItem("data")
}

