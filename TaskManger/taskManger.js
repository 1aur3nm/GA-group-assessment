//// Create a class called TaskManager - that will create a new object for each task
////Modify the TaskManagerclass by adding a method that takes as & an argument a task JSON object and creates a Card Layout HTML as defined in sprint 1
////Add an id attribute to the content list group created in sprint 1 and write the code to add the card to your HTML element

// class name: taskManager
class taskManager {
  static taskList = [];
  // the objects "setup" | Makes and returns objects
  constructor(nameOfTask, desription, assign, calendar, status) {
    this._nameOfTask = nameOfTask;
    this._desription = desription;
    this._assign = assign;
    this._calendar = calendar;
    this._status = status;
    this._id = 0;
  }

  ////Getters
  getNameOfTask() {
    return this._nameOfTask;
  }

  getDesription() {
    return this._desription;
  }

  geAssign() {
    return this._assign;
  }

  getCalendar() {
    return this._calendar;
  }

  getStatus() {
    return this._status;
  }

  geId() {
    return this._id;
  }

  ////Setters
  setName(newTaskName) {
    this._name = newTaskName;
  }

  setDesription(newDesription) {
    this._desription = newDesription;
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


  
}
//console.log(taskManager.name);

