//// Create a class called TaskManager - that will create a new object for each task
////Modify the TaskManagerclass by adding a method that takes as & an argument a task JSON object and creates a Card Layout HTML as defined in sprint 1
////Add an id attribute to the content list group created in sprint 1 and write the code to add the card to your HTML element

// class name: taskManager
localStorage.getitem(getAllTasks)
JSON.parse
Array
function TaskHTML (displayCards)


function render(){
    var render = displayCards
    displayCards
}

class taskManager {
    taskList = [];
    // the objects "setup" | Makes and returns objects
    constructor (name, desription, assign, calendar, status) {
        this._name = name;
        this._desription = desription;
        this._assign = assign;
        this._calendar = calendar;
        this._status = status;
        this._id = 0;
 }

 ////Getters
 getName(){
    return this._name
 };

 getDesription(){
    return this._desription
 };

 geAssign(){
    return this._assign
 };

 getCalendar(){
    return this._calendar
 };

 getStatus(){
     return this._status
 }

 geId(){
    return this._id
 };

 ////Setters
setName (newName){
    this._name = newName;
}

setDesription (newDesription){
    this._desription = newDesription;
}

setAssign (newAssign){
    this._assign = newAssign;
}

setcalendar (newCalendar){
    this._calendar = newCalendar;
}

setStatus (newStatus){
    this._status = newStatus;
}

setId (newId){
    this._id = newId;
}
static getAllTasks (){

}
}
export default taskManager
//console.log(taskManager.name);