


//animation service 

window.addEventListener('scroll', function () {
  var animatedElements = document.querySelectorAll('.cardSmall');
  var containerPosition = document.querySelector('.all-card').getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (containerPosition < screenHeight) {
    for (var i = 0; i < animatedElements.length; i++) {
      (function (index) {
        setTimeout(function () {
          animatedElements[index].style.opacity = '1';
          animatedElements[index].style.transform = 'translateY(0)';
        }, index * 250);
      })(i);
    }
  }
});

window.addEventListener('load', function () {
  var animatedContainer = document.querySelector('.all-card');
  animatedContainer.style.visibility = 'visible';
});


//   animation members kafu 

window.addEventListener('scroll', function () {
  var animatedElements = document.querySelectorAll('.cardkafu');
  var containerPosition = document.querySelector('.all-kafu').getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (containerPosition < screenHeight) {
    for (var i = 0; i < animatedElements.length; i++) {
      (function (index) {
        setTimeout(function () {
          animatedElements[index].style.opacity = '1';
          animatedElements[index].style.transform = 'translateY(0)';
        }, index * 250);
      })(i);
    }
  }
});

window.addEventListener('load', function () {
  var animatedContainer = document.querySelector('.all-kafu');
  animatedContainer.style.visibility = 'visible';
});
window.addEventListener('scroll', function () {
  var animatedElements = document.querySelectorAll('.our-work-content');
  var containerPosition = document.querySelector('.card-our-work').getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (containerPosition < screenHeight) {
    for (var i = 0; i < animatedElements.length; i++) {
      (function (index) {
        setTimeout(function () {
          animatedElements[index].style.opacity = '1';
          animatedElements[index].style.transform = 'translateY(0)';
        }, index * 200);
      })(i);
    }
  }
});

window.addEventListener('load', function () {
  var animatedContainer = document.querySelector('.card-our-work');
  animatedContainer.style.visibility = 'visible';
});



document.querySelectorAll(".cardSmall .card button").forEach(e=>{
  e.addEventListener("click",()=>{
      let nameService = e.parentElement.children[0].children[1].innerHTML;
      document.querySelector(".pop-service").style.transform = "translate(-50%, 00%)";
      document.querySelector(".colorful-form .name-service").innerHTML = nameService
  })
})
document.querySelector(" .fa-xmark").addEventListener("click",()=>{
  document.querySelector(".pop-service").style.transform = "translate(100%, 0%)";
})




document.querySelector(".pop .all-pop button").addEventListener("click", () => {
  document.querySelector(".pop-idea").style.transform = "translate(-50%, 0%)";
})
document.querySelector(".pop-idea .fa-xmark").addEventListener("click", () => {
  document.querySelector(".pop-idea").style.transform = "translate(100%, 0%)";
})