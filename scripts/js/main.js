$(document).ready(function () {
     var broj = document.getElementById("srecni-broj");
    broj.innerHTML = 'Tvoj loto broj je ' + Math.floor(Math.random() * 39 + 1)+ ' ' + Math.floor(Math.random() * 39 + 1)+ ' ' + Math.floor(Math.random() * 39 + 1)+ ' ' + Math.floor(Math.random() * 39 + 1)+ ' ' + Math.floor(Math.random() * 39 + 1)+ ' ' + Math.floor(Math.random() * 39 + 1)+ ' ' + Math.floor(Math.random() * 39 + 1);
});

$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        directionNav: false
    });
});


function openWin() {
    myWindow = window.open("form.html", "myWindow", "width=1500,height=1000");
}