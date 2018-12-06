$(function(){
    new WOW().init(); 
  });

  const swing = document.querySelector('.btn');
  swing.addEventListener('mouseenter', overMouse);
 


  function overMouse(){
   swing.classList += 'animated swing ';
  }