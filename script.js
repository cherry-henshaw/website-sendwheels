
// Signup page

let myName = document.getElementById("name");
let myPhoneNum = document.getElementById("phone");
let myEmail = document.getElementById("mail");
let myPassword = document.getElementById("password");
let form = document.getElementById("form");
let modal = document.getElementById("modal");
let btnOpen = document.getElementById("btn-open");
let btnClose = document.getElementById("btn-close");
let errorMessage = document.getElementById("error1");
let error = document.getElementById("error2");
let errorThree = document.getElementById("error3");
let errorFour = document.getElementById("error4");
let pop = document.getElementById('popup');


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // pop.style.display = 'block'
  if (myName.value == "") {
    errorMessage.innerHTML = 'this field is required';
    return false
  } else if (myPhoneNum.value == "") {
    error.innerHTML = 'this field is required';
    return false
  } else if (myEmail.value == "" && myEmail.value.includes("@")) {
    errorThree.innerHTML = 'this field is required';
    return false
  } else if (myPassword.value.length < 6) {
    errorFour.innerHTML = 'Your password should have at least 6 characters';
    return false
  } else{
    pop.style.display = 'block'
  }

});

btnClose.addEventListener("click", function () {
  pop.style.display = 'none';
})


function open() {
  pop.style.display = 'block';
}





