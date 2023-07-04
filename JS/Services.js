document.querySelectorAll(".second-content button").forEach(e=>{
    e.addEventListener("click",()=>{
      console.log(e.parentElement.parentElement.children[0].children[0].children[1].innerHTML);
        let nameService = e.parentElement.parentElement.children[0].children[0].children[1].innerHTML;
        document.querySelector(".pop-service").style.transform = "translate(-50%, 0%)";
        document.querySelector(".colorful-form .name-service").innerHTML = nameService
    })
})
document.querySelector(".all-pop-service .fa-xmark").addEventListener("click",()=>{
    document.querySelector(".pop-service").style.transform = "translate(100%, 0%)";
})


window.addEventListener('scroll', function() {
    var animatedElements = document.querySelectorAll('.card-services');
    var containerPosition = document.querySelector('.all-card-services').getBoundingClientRect().top;
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
    var animatedContainer = document.querySelector('.all-card-services');
    animatedContainer.style.visibility = 'visible';
  });