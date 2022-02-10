// get header
var header = document.getElementById('header');
// get menu-icon 
var barIcon = document.getElementById('bar-icon');
// tao bien de lay height header
var heightHeader = header.clientHeight;

// setOnClick btn menu-icon
barIcon.onclick = function() {
   var isclosed = header.clientHeight === heightHeader;
   if (isclosed){
       header.style.height = 'auto';
   }else {
       header.style.height = null;
   }
// set height vao style se uu tien hon css
}

// dong menu khi click vao items
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if (isParentMenu){
            event.preventDefault();
        }else{
            header.style.height = null;
        }
    }
}

// btn send 
// get element 
// var tagName = document.getElementsByClassName('btn-send');
// // tagName.addEventListener("click", alert('succesfull'));
// tagName.onclick = function(){
//     alert('succesfull')
// };



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

var userIcon = document.querySelector('.user-icon');
userIcon.addEventListener('click', function(){
    location.assign('login.html');
});

const btnBuyTickets = document.querySelectorAll('.js-buy-ticket');
const modalOpen = document.querySelector('.js-modal');
const overlay = document.querySelector('.js-modal-container');
const btnClose = document.querySelector('.js-modal-close');
const btnPay = document.querySelector('.js-modal-btn-pay');

function showBuyTicket() {
  modalOpen.classList.add('open');
};

for (const btnBuyTicket of btnBuyTickets) {
  btnBuyTicket.addEventListener('click', showBuyTicket)
};


function closeBuyTicket() {
  modalOpen.classList.remove('open');
};

btnClose.addEventListener('click', closeBuyTicket);

modalOpen.addEventListener('click', closeBuyTicket);
// ngan viec noi bot ra khoi container
overlay.addEventListener('click', function(event) {
  event.stopPropagation();
}); 

function payBill() {
  modalOpen.classList.remove('open');
  alert('Buy tickets successful . Thank you for your choice !');
  location.assign('index.html');

}
btnPay.addEventListener('click', payBill);