import TaskManager from "./Classes/TaskManager.js"
window.addEventListener("load", function(){
  const name = event.target.Assignto.value
  const title = event.target.title.name
  const modalForm = document.getElementById("modalForm");
  
  function displayCards(){
    let tasks = TaskManager.getAllTasks()
    const container = document.getElementById("container")
    tasks.map(eachTask => {
      TaskManager.createTaskHTML(eachTask, container)
    })
  }
  displayCards()



//Drop Down Elements - Assigned To /  Status
var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
//<<<<<<< main



function validateTaskForm (event) {
  if (validateForm(event)){saveChanges(event)}
  else return Error
}


  function saveChanges(event){
    event.preventDefault()
    const task = new TaskManager(title, name)
    TaskManager.saveToLocal(task)
  }


modalForm.addEventListener("submit", (event)=>validateTaskForm(event));

  ///Form Validation Code
function validateName(event){
  let name = event.target.inputName.value
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

  return true
}
 function description(event){
  if (description <= 15){
    alert("Description Must be More Than 15 Characters")
    return false

   }
   return true
  }

 function validateAssignTo(event) {
   if (validateAssignTo < 0 )(event)
     return false
    alert("Task must be Assigned")

   if (validateAssignTo => 1)
     return true
 }
 
// function DueDate (event) {
//   if (DueDate < 0) (event)
//   return false

//   if (DueDate => 1)
//   return true

// }


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

