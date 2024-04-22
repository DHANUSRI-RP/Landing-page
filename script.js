let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click',function(){
  menu.classList.add('active');
})
closeBtn.addEventListener('click',function(){
  menu.classList.remove('active');
})