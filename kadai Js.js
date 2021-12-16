const h1 = document.querySelector('h1')
h1.animate({
  opacity: [0, 1]
}, 1500)

window.onload=function(){
  var scroll = document.querySelectorAll('.up');
   
  var Animation = function() {
    for(var i = 0; i < scroll.length; i++) {
    var triggerMargin = 80;
    if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
    scroll[i].classList.add('show');
    }
    }
    }
    window.addEventListener('scroll', Animation);
  
}                               