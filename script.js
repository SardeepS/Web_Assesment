
// Targetting all classes & id from HTML
const form = document.getElementById("form");
const username = document.getElementsByClassName("user")[0];

/*const email = document.getElementbyId("email");
const password = document.getElementbyId("password");
console.log('username:' ,username);

/*let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon"); */

// Adding the submit event Listener

function errorMsg (element, errorMessage) {
  const parent = element.parentElement;
  element.style.borderColor = 'red';

  
  const message = parent.getElementsByClassName('error')[0];

  message.innerHTML = errorMessage;

};
console.log('errormesg' ,errorMsg);

function successMsg(element) {
  element.style.borderColor = 'blue';
};
 

form.addEventListener('submit', (e) => {
  e.preventDefault();

  
//user
  if (username.value.trim() === "") {
    errorMsg(username, 'Name can not be empty');
  } else {
    successMsg(username);
  }
//email
  if (email.value.trim() === "") {
    errorMsg(email, 'Email cannot be blank');
  } else if(isEmailValid(email.value)) {
    successMsg(email);
  } else {
    successMsg(email); 
   }


//password
  if (password.value.trim() === "") {
    errorMsg(password, 'Password can not be empty');
  } {
    successMsg(password);
  }
  if (dateofbirth.value.trim() === "") {
    errorMsg(dateofbirth, 'date can not be empty');
  } {
    successMsg(dateofbirth);

    
  }
  if (mobile.value.trim() === "") {
    errorMsg(mobile, 'mobile can not be empty');
  } {
    successMsg(mobile);
  }
});
// email pattern
function isEmailValid(email) {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



  /*engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});*/

// engine function which will do all the works
/*
let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};*/
