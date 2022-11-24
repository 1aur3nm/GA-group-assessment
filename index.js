//Drop Down Elements - Assigned To /  Status
var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
//<<<<<<< main
//const saveChanges
document.addEventListener("click", saveChanges);
function saveChanges() {
  document.getElementsByClassName(btnbtn-primary).addEventListener("click"), saveChanges;
};

saveChanges.addEventListener("click", () => saveChanges);
const submitButton = document.getElementsByClassName("btn btn-primary")



    ///Form Validation Code
    function checkName(){
      var name = $('#InputName').val();
      var pattern = new RegExp(/^[a-zA-Z ]{5,30}$/);
      if (!pattern.test(name)) {
        $('#errorname').html('Should be between 5-30 contains only space');
        $('#errorname').show(300);
        error_name = true;
      }
      else {
          $('#errorname').hide(400);
      }
    }
 function checkDescription (){
  //var checkDescription ; => ({15:});
 }
 function AssignedTo (){
  //var AssignedTo () => ({8});
 }
 //function DueDate() {(

 //)};

// Adding Day and time
function formatDateAndTime(timestamp) {
  let date = new Date(timestamp);

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
  console.log(date);
  return (date = `${day} ${hours}:${mins}`);

  let newDate = new Date(date);
  formatDateAndTime(newDate);
}

