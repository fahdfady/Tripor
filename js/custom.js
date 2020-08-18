// hamburger navbar

var barIcon = document.querySelector('.nav .fa-bars');
var myLinks = document.querySelector('.myLinks');
barIcon.onclick = function () {


    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block";
    }
}

var productBackground = document.querySelectorAll('.products');
var i;
// Loop for backgrounds...

for (i = 0; i < productBackground.length; i++) {
    console.log(i);

    if (i == 0 || i == 2) {
        productBackground[i].style.background = "#fff";
    }
    if (i == 1 || i == 3) {
        productBackground[i].style.background = "#eee";
    }
}

// cursor
var mouseCursor = document.querySelector('.cursor');
var mouseDot = document.querySelector('.dot');
var smallSpeed = 0.2;
var largeSpeed = 0.12;


window.addEventListener('mousemove', moveCursor);


function moveCursor(e) {
    var placeX = e.pageX - 25;
    var placeY = e.pageY - 25;
    var placeXS = e.pageX - 4;
    var placeYS = e.pageY - 4;

    mouseCursor.style.transform = "translate(" + placeX + 'px,' + placeY + 'px)';

    mouseDot.style.transform = "translate(" + placeXS + 'px,' + placeYS + 'px)';

}

// FAQ
$(document).ready(function () {
    $(".question").click(function () {

        $(this).next().slideToggle();
        $(this).toggleClass('questionBorder');


        // toggleClass()
        $('.answer').not(

            $(this).next()).slideUp(500);

    })
})

// swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// add WOW animation to all products
$('.product').attr("class", "wow bounceIn product");
$('.product').attr("data-wow-duration", "0.7s");



if (document.querySelector('.layer h1').length == 100) {
    this.style.whiteSpace = "normal";
}