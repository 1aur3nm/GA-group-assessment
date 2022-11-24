//Drop Down Elements - Assigned To /  Status
var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});

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

  //document.body.appendChild(document.createElement('span').newDate.innerHTML = date
  //document.appendChild(document.createElement('span').newDate.innerHTML = date
  //document.querySelector("dateAndTime").textContent = date
  //document.getElementById("dateAndTime").innerHTML = date
  //document.body.appendChild.getElementById(document."span").newDate.innerHTML = date

  console.log(date);

  return (date = `${day} ${hours}:${mins}`);
}
formatDateAndTime(newDate);
