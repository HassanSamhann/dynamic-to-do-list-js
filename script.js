// document.addEventListener('DOMContentLoaded', function() {

//     let addButton = document.getElementById("add-task-btn") ; 

//     let taskInput  = document.getElementById("task-input") ; 
//     let taskList = document.getElementById("task-list") ; 
//     console.log(taskList)
// function addTask() {
//     let taskText = taskInput.value.trim(); 
//     if(taskText === ''){
//         alert("enter a task ") ; 
//     }
//     if(taskText !== ''){
//         let li = document.createElement("li"); 
//             li.textContent = taskText ; 
//         let btn = document.createElement("button"); 
//         btn.textContent = "Remove" ; 
//         btn.classList.add = "remove-btn" ; 
//         btn.onclick = ()=> {
//             li.remove()
//         }   
//         li.appendChild(btn); 
//         taskList.appendChild(li); 

//     }   
//     taskInput.value = "" ; 


// }
// taskInput.addEventListener("keypress",(event)=>{
//     if(event.key ==="Enter"){
//         addTask()
//     }
// })

// addButton.addEventListener("click", addTask)


// })
document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.getElementById("add-task-btn");
    let taskInput = document.getElementById("task-input");
    let taskList = document.getElementById("task-list");

   
    loadTasks();

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 

    function addTask(taskText, save = true) {
        let li = document.createElement("li");
        li.textContent = taskText;

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");
        btn.onclick = () => {
            li.remove();
            removeTask(taskText);
        };

        li.appendChild(btn);
        taskList.appendChild(li);

        if (save) {
            saveTask(taskText);
        }
    }

    function saveTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    function removeTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    function handleAddTask() {
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert("Enter a task");
            return;
        }
        addTask(taskText);
        taskInput.value = "";
    }

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleAddTask();
        }
    });

    addButton.addEventListener("click", handleAddTask);
});
