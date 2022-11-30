import TaskManager from "./TaskManager/taskManager.js"
function DeleteCard(TaskId){
  TaskManager.removeTasks(TaskId)
  displayCards()

}
window.addEventListener("load", function(){
 let taskList = TaskManager.getAllTasks()
 taskList ??= []
 displayCards()
  const modalForm = document.getElementById("modalForm");
  
  function displayCards(){
    const container = document.getElementById("card-container")
    container.innerHTML=""
    taskList.map(eachTask => {
      TaskManager.createTaskHTML(eachTask, container)
    })
  }
  document.getElementById("card-container").addEventListener("click", (e) => {
    
    let element = e.target
    if (element === e.currentTarget) {
      return
    }
    if (element.nodeName === "BUTTON"&&element.className==="btn-delete") {
    removeTasks(Number(element.id))
    displayCards()
    TaskManager.saveToLocal(taskList)
    }
 })
 function removeTasks(id) {
  for(let i=0;i<taskList.length;i++) {
    if (taskList[i]._id===id){
      taskList.splice(i,1)
    } 
  }
  }


//Drop Down Elements - Assigned To /  Status
var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
//<<<<<<< main



function validateTaskForm (event) {
  event.preventDefault()
  if (validateForm(event)){saveChanges(event)
  }
  //else return Error
}


  function saveChanges(event){
    const nameOfTask = event.target.InputName.value
    const assign = event.target.AssignTo.value
    const description = event.target.description.value
    const calendar = event.target.date.value
    const status = event.target.status.value
    taskList.push( new TaskManager(nameOfTask, description, assign, calendar, status))
    TaskManager.saveToLocal(taskList)
    displayCards()
  }


modalForm.addEventListener("submit", (event)=>validateTaskForm(event));

  ///Form Validation Code
function validateName(event){
  let name = event.target.InputName.value
  if(name === "" || name.length < 4){
    alert("PUT IN A NAME !")
    return false
  }
  return true
}

function validateForm(event){
  if (!validateName(event)){
    return false
  }
  if (!description(event)){
    return false
  }
  if (!validateAssignTo(event)){
    return false
  }
  if (!DueDate(event)){
    return false
  }

  return true
}
 function description(event){
  if (event.target.description.value.length < 15){
    alert("Description Must be More Than 15 Characters")
    return false

   }
   return true
  }

 function validateAssignTo(event) {
   if (!event.target.AssignTo.value.length > 0)
     { alert("Task must be Assigned")
     return false
     }
     return true
 }

 function DueDate (event) {
 const validateDueDate = event.target.date.value

  const currentDate = new Date().toJSON().slice(0,10);
  if(validateDueDate.length === 0){
    alert("Due date can't be empty!");
    return false
  }
  if(validateDueDate < currentDate){
    alert("Date Must Be In The Future!");
    return false
  } return true
  }


//// Time and date
function formatDateAndTime() {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let mins = date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  console.log(date.toDateString().split(" "))
  let dayDate = date.toDateString().split(" ")[2]
  let month = date.getMonth() + 1
  let year = date.toDateString().split(' ')[3]

  console.log(date);
  return date = `${day}: ${dayDate}/${month}/${year} - ${hours}:${mins}`;
}


  document.querySelector("#dateAndTime").textContent = formatDateAndTime()
  // document.getElementById("dateAndTime").innerHTML = date
})


