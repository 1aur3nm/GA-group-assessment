console.log("script loaded")
//Drop Down Elements - Assigned To /  Status
var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle")
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
//<<<<<<< main
//const saveButton
document.addEventListener("click", saveButton);
function saveButton(){}
  let Save = document.getElementById("saveButton");
saveButton.addEventListener("click", () => saveButton());
;


    ///Form Validation Code
$(function(){

  $('#errorname').hide();
  $('#errorDescription').hide();
  $('#errorAssignTo').hide();
  $('#errorDueDate').hide();
  $('#errorconpass').hide();

  var error_name = false;
  var error_Description = false;
  var error_AssignTo = false;
  var error_DueDate = false;
  var error_conpass = false;

  $('#form_name').focusout(function(){
    checkName();
  });
  $('#form_Description').focusout(function(){
    checkDescription();
  });
  $('#form_AssignTo').focusout(function(){
    checkAssignTo();
  });
  $('#form_pwd').focusout(function(){
    checkDueDate();
  });
  $('#form_conpwd').focusout(function(){
    checkConPass();
  });

  // check name
  function checkName(){
    var name = $('#form_name').val();
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
  // check Description
  function checkDescription(){
    var Description = $('#form_Description').val();
    var pattern = new RegExp(/^[a-zA-Z0-9._]{6,20}$/);
    if (!pattern.test(Description)) {
      $('#errorDescription').html('Should be between 15-50 contains only alphabets numbers . _');
      $('#errorDescription').show(300);
      error_Description = true;
    }
    else {
        $('#errorDescription').hide(400);
    }
  }

  //check AssignTo
  function checkAssignTo(){
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    if (pattern.test($("#form_AssignTo").val())) {
      $('#errorAssignTo').hide(400);
    }
    else {
        $('#errorAssignTo').html('Invalid AssignTo address');
        $('#errorAssignTo').show(300);
        error_AssignTo = true;
    }
  }

  // check DueDate
  function checkPass(){
    var DueDate = $('#form_pwd').val();
    var pattern = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);

    if (!pattern.test(DueDate)) {
      $('#errorpass').html('Should be at least a uppercase,lowercase,number,special characters and minimum length 8');
      $('#errorpass').show(300);
      error_pass = true;
    }
    else {
        $('#errorpass').hide(400);
    }
  }

  // check confirm DueDate
  function checkConPass(){
    var DueDate = $('#form_pwd').val();
    var con_pass = $('#form_conpwd').val();
    if (DueDate != con_pass) {
      $('#errorconpass').html('DueDate not match');
      $('#errorconpass').show(300);
      error_conpass = true;
    }
    else {
        $('#errorconpass').hide(400);
    }
  }

  //form submit
  $('#reg_form').submit(function(){
    error_name = false;
    error_username = false;
    error_AssignTo = false;
    error_pass = false;
    error_conpass = false;
    checkName();
    checkDescription();
    checkAssignTo();
    checkPass();
    checkConPass();

    if (error_name == false && error_username == false && error_AssignTo==false && error_pass == false && error_conpass == false) {
      return true;
    }
    else {
      return false;
    }
  });

});

function getDateTime() {
  var now     = new Date(); 
  var year    = now.getFullYear();
  var month   = now.getMonth()+1; 
  var day     = now.getDate();
  var hour    = now.getHours();
  var minute  = now.getMinutes();
  var second  = now.getSeconds(); 
  if(month.toString().length == 1) {
       month = '0'+month;
  }
  if(day.toString().length == 1) {
       day = '0'+day;
  }   
  if(hour.toString().length == 1) {
       hour = '0'+hour;
  }
  if(minute.toString().length == 1) {
       minute = '0'+minute;
  }
  if(second.toString().length == 1) {
       second = '0'+second;
  }   
  var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
   return dateTime;
}

//example usage: realtime clock
setInterval(function(){
  currentTime = getDateTime();
  document.getElementById("dateAndTime").innerHTML = currentTime;
}, 1000);
