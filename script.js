document.addEventListener('DOMContentLoaded', function() {

    let addButton = document.getElementById("add-task-btn") ; 

    let taskInput  = document.getElementById("task-input") ; 
    let taskList = document.getElementById("task-list") ; 
    console.log(taskList)
function addTask() {
    let taskText = taskInput.value.trim(); 
    if(taskText === ''){
        alert("enter a task ") ; 
    }
    if(taskText !== ''){
        let li = document.createElement("li"); 
            li.textContent = taskText ; 
        let btn = document.createElement("button"); 
        btn.textContent = "Remove" ; 
        btn.classList.add = "remove-btn" ; 
        btn.onclick = ()=> {
            li.remove()
        }   
        li.appendChild(btn); 
        taskList.appendChild(li); 

    }   
    taskInput.value = "" ; 


}
taskInput.addEventListener("keypress",(e)=>{
    if(e.key ==="Enter"){
        addTask()
    }
})

addButton.addEventListener("click", addTask)


})
