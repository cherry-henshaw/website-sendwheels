// login page
let userName = document.getElementById("username");
let passWord = document.getElementById("password");
let form = document.getElementById("form");
let btnOpen = document.getElementById("btn-open");
let btnClose = document.getElementById("btn-close");
let errorMessage = document.getElementById("error1");
let error = document.getElementById("error2");
let pop = document.getElementById('popup');


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // pop.style.display = 'block'
  if (userName == null || userName.value == "") {
    errorMessage.innerHTML = 'this field is required';
    return false
  } else if (passWord == null || passWord.value == "") {
    error.innerHTML = 'this field is required';
    return false
  } else {
    pop.style.display = 'block'
  }

});

btnClose.addEventListener("click", function () {
  pop.style.display = 'none'
})


function close() {
  pop.style.display = 'none'
}



















