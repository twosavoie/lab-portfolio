// Based on tutorial https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// replaced with hamburger.addEventListener below
// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// This is part of the instructions but the instructions have the wrong class name
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));
const navItem = document.querySelectorAll(".nav-item");

navItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', function(){
    if (hamburger.classList.contains('active')) {
      this.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('active');
      navMenu.classList.remove("active");
    } else {
      hamburger.classList.add('active'); 
      navMenu.classList.toggle("active");
      this.setAttribute('aria-expanded', 'true');
    }
  });
