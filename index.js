//Drop Down Elements - Assigned To /  Status
var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
//<<<<<<< main
const saveChanges
document.addEventListener("click", saveChanges);
function saveChanges() {
  document.getElementsByClassName(btnbtn-primary).addEventListener("click"), saveChanges;
};

submitButton.addEventListener("click", () => saveChanges);
const submitButton = document.getElementsByClassName("btn btn-primary")



    ///Form Validation Code
const validateTaskForm,
  // validation fails if the input is blank
  {if:(form.inputfield.value == <"8"); {
    alert ("Error: Input is empty!")
    form.inputfield.focus();
    return false;
  }

  // regular expression to match only alphanumeric characters and spaces
  var re = /^[\w ]+$/;

  // validation fails if the input doesn't match our regular expression
  if(!re.test(form.inputfield.value)) {
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
  }

  // validation was successful
  return true;
;


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

