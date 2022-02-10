const signIn = document.querySelector("#signInButton");
const signUp = document.querySelector("#signUpButton");
const signInForm = document.querySelector(".container .sign-in-form");
const signUpForm = document.querySelector(".container .sign-up-form");
const overlay_container = document.querySelector(".container .overlay-container");
const overlay = document.querySelector(".container .overlay-container .overlay");
const btnSignIn = document.querySelector('.signIn');
const btnSignUp = document.querySelector('.signUp');

signIn.addEventListener("click", () => {
  overlay_container.style.transform = "translateX(100%)";
  overlay.style.transform = "translateX(-50%)";
  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
});
signUp.addEventListener("click", () => {
  overlay_container.style.transform = "translateX(0)";
  overlay.style.transform = "translateX(0)";
  signUpForm.classList.add("active");
  signInForm.classList.remove("active");
});

btnSignIn.addEventListener("click", function dieuhuong(){
    location.assign("main.html");
});

btnSignUp.addEventListener("click", function(){
    alert('chua xu ly back-end');
});








