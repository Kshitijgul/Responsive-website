burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
Navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');
burger.addEventListener('click',()=>{
  rightNav.classList.toggle('v-class-resp');
  Navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');

})