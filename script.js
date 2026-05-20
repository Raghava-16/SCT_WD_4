
const navbar = document.getElementById("navbar");

/* Navbar Scroll Effect */

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});