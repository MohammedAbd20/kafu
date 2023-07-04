// ---------horizontal-navbar-menu-----------
var tabsNewAnim = $('#navbar-animmenu');
var selectorNewAnim = $('#navbar-animmenu').find('li').length;
//var selectorNewAnim = $(".tabs").find(".selector");
var activeItemNewAnim = tabsNewAnim.find('.active');
var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
var itemPosNewAnimLeft = activeItemNewAnim.position();
$(".hori-selector").css({
    "left":itemPosNewAnimLeft.left + "px",
    "width": activeWidthNewAnimWidth + "px"
});
$("#navbar-animmenu").on("click","li",function(e){
    document.querySelector("#navbar #navbar-animmenu").classList.toggle("navbar-animmenu-toggle")
    document.querySelector("#navbar #nav-left").classList.toggle("navbar-animmenu-toggle")
    $('#navbar-animmenu ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
        "left":itemPosNewAnimLeft.left + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
});

document.querySelector("#icon-menu .fa-bars").addEventListener("click",()=>{
    document.querySelector("#navbar #navbar-animmenu").classList.toggle("navbar-animmenu-toggle")
    document.querySelector("#navbar #nav-left").classList.toggle("navbar-animmenu-toggle")
})
