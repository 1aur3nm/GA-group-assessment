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

  static getAllTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
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

  ////Local Stoage:
  static saveToLocal(obj) {
    localStorage.setItem(
      "task",
      JSON.stringify(obj)
    );
  }

  static getAllTasks() {
    return JSON.parse(localStorage.getItem("task"))
  }

  ////Will remove anything in storage
  static removeTasks(){
    localStorage.removeItem("tasks"[obj])
  }


//console.log(taskManager.name);

////To swich from the cards orginal status and make changes
//switch (this._nameOfTask){
//case "toGetName";
//this.setId(toGetName.length);   //to set the id | starting array length
//toGetName.push(this);          //add the card info to start an array
//localStorage.setItem("toGetName" JSON.stringify(toGetName));
