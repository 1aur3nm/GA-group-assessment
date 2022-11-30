//// Create a class called TaskManager - that will create a new object for each task
////Modify the TaskManagerclass by adding a method that takes as & an argument a task JSON object and creates a Card Layout HTML as defined in sprint 1
////Add an id attribute to the content list group created in sprint 1 and write the code to add the card to your HTML element

// class name: taskManager

class TaskManager {
  static taskList = [];
  static id = 0;
  // the objects "setup" | Makes and returns objects
  constructor(nameOfTask, description, assign, calendar, status) {
    this._nameOfTask = nameOfTask;
    this._description = description;
    this._assign = assign;
    this._calendar = calendar;
    this._status = status;
    this._id = ++TaskManager.id;
  }

  ////Getters
   getNameOfTask() {
    return this._nameOfTask;
  }

  getDescription() {
    return this._description;
  }

  getAssign() {
    return this._assign;
  }

  getCalendar() {
    return this._calendar;
  }

  getStatus() {
    return this._status;
  }

  getId() {
    return this._id;
  }

  ////Setters
  setName(newTaskName) {
    this._nameOfTask = newTaskName;
  }

  setDescription(newDescription) {
    this._description = newDescription;
  }

  setAssign(newAssign) {
    this._assign = newAssign;
  }

  setcalendar(newCalendar) {
    this._calendar = newCalendar;
  }

  setStatus(newStatus) {
    this._status = newStatus;
  }

  setId(newId) {
    this._id = newId;
  }

  static createTaskHTML(obj, where) {
    const card = document.createElement("li");
    card.classList = "list-group-item"
    card.innerHTML = `<div class="card">
    <div class="card-header">
        <h2 class="card-status">${obj._status}</h2>
    </div>
    <div class="card-body">
        <h2 class="card-name">${obj._nameOfTask}</h2>
        <p class="card-description">${obj._description}</p>
    </div>
    <div class="card-footer">
        <p class="card-assign">${obj._assign}</p>
        <p class="due-date">${obj._calendar}</p>
    </div>
    <button id="${obj._id}" class="btn-delete" >Delete</button>
</div>`

    TaskManager.render(card, where);
  }


  static render(card, where) {
    where.appendChild(card);
  }

  static saveToLocal(obj) {
    localStorage.setItem("task", JSON.stringify(obj));
  }
  static getAllTasks () {
  const temp= JSON.parse (localStorage.getItem("task"))
  if (temp != null && temp.length>0){
    TaskManager.id=temp[temp.length-1]._id
  }
  return temp
  }

  

}
//console.log(taskManager.name);

////To swich from the cards orginal status and make changes
//switch (this._nameOfTask){
//case "toGetName";
//this.setId(toGetName.length);   //to set the id | starting array length
//toGetName.push(this);          //add the card info to start an array
//localStorage.setItem("toGetName" JSON.stringify(toGetName));  //added to local

export default TaskManager;
