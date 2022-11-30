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
    this._desription = description;
    this._assign = assign;
    this._calendar = calendar;
    this._status = status;
    this._id = TaskManager.id++;
  }

  ////Getters
  getNameOfTask() {
    return this._nameOfTask;
  }

  getDescription() {
    return this._description;
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

  setDesription(newDescription) {
    this._desription = newDescription;
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


  static render(card, where) {
    where.appendChild(card);
  }

  static saveToLocal(obj) {
    localStorage.setItem("task", JSON.stringify(obj));
  }



  static removeTasks(obj) {
    localStorage.removeItem("task"[obj]);
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
