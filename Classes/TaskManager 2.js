//// Create a class called TaskManager - that will create a new object for each task
////Modify the TaskManagerclass by adding a method that takes as & an argument a task JSON object and creates a Card Layout HTML as defined in sprint 1
////Add an id attribute to the content list group created in sprint 1 and write the code to add the card to your HTML element

// class name: taskManager

 //Create-Class-add-tasks-programatically
class TaskManager {
  static taskList = [];
  static id = 0;
  // the objects "setup" | Makes and returns objects
  constructor(name, description, assign, calendar, status) {
    this._name = name;
    this._description = description;
    this._assign = assign;
    this._calendar = calendar;
    this._status = status;
    this._id = TaskManager.id++;
  }

  ////Getters
  getName() {
    return this._name;
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
  setName(newName) {
    this._name = newName;
  }

  setDescription(newDescription) {
    this._description = newDescription;
  }

  setAssign(newAssign) {
    this._assign = newAssign;
  }

  setCalendar(newCalendar) {
    this._calendar = newCalendar;
  }

  setStatus(newStatus) {
    this._status = newStatus;
  }

  setId(newId) {
    this._id = newId;
  }

  static createTaskHTML(obj, where) {
    const card = document.createElement("div");
    card.innerHTML = `<h4>${obj.name}</h4>
                          <p>${obj.description}</p>
                          <p>${obj.assign}</p>
                          <p>${obj.calendar}</p>
                          <p>${obj.status}</p>
                          `;
    TaskManager.render(card, where);
  }

  static getAllTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  static render(card, where) {
    where.appendChild(card);
  }

  static saveToLocal(obj) {}
}


//console.log(taskManager.name);
