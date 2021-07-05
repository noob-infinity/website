const menu1=document.querySelector('.menu-toggle');
const menu2=document.querySelector('#menu');
menu1.addEventListener('click',function(){  
      menu2.classList.toggle('active');
})