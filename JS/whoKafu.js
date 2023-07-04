document.querySelector("#icon-menu .fa-bars").addEventListener("click",()=>{
    document.querySelector("#navbar #navbar-animmenu").classList.toggle("navbar-animmenu-toggle")
    document.querySelector("#navbar #nav-left").classList.toggle("navbar-animmenu-toggle")
})


window.addEventListener('scroll', function() {
    var animatedElements = document.querySelectorAll('.card-whoKafu');
    var containerPosition = document.querySelector('.all-card-whoKafu').getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    if (containerPosition < screenHeight) {
      for (var i = 0; i < animatedElements.length; i++) {
        (function(index) {
          setTimeout(function() {
            animatedElements[index].style.opacity = '1';
            animatedElements[index].style.transform = 'translateY(0)';
          }, index * 250); 
        })(i);
      }
    }
  });
  
  window.addEventListener('load', function() {
    var animatedContainer = document.querySelector('.all-card-whoKafu');
    animatedContainer.style.visibility = 'visible';
  });