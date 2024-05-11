$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    // Adjust navbar and home section
    if (scrollTop > 10) {
        $('#nav_con').hide(500);
        $('#vl-home').css('height', '30%');
        if (window.matchMedia("(max-width: 1000px)").matches) {
            $('#vl-home').css('height', '35%');
        }
    } else {
        $('#nav_con').show(500);
        $('#vl-home').css('height', '0vh');
    }

    // Adjust about_me section
    if (scrollTop < 400) {
        $('#about_me').css({
            'left': '20%',
            'opacity': '0%'
        });
        $('#vl-about').css({
            'height' : '0vh'
        });
    } else {
        var aboutLeft = window.matchMedia("(max-width: 800px)").matches ? '0%' : '15%';
        $('#about_me').css({
            'left': aboutLeft,
            'opacity': '100%'
        });
        $('#vl-about').css({
            'height' : '75vh'
        });
    }

    // EDUCATION
    if (scrollTop < 900) {
        $('#school').css({
            'left': '25%',
            'opacity': '0%'
        });
        $('#vl-edu').css({
            'height' : '0vh'
        });
        $('#book').css({
            'text-shadow' : '0 0 0px'
        });
    } else {
        var schoolLeft = window.matchMedia("(max-width: 800px)").matches ? '5%' : '20%';
        $('#school').css({
            'left': schoolLeft,
            'opacity': '100%'
        });
        $('#vl-edu').css({
            'height' : '75vh'
        });
        $('#book').css({
            'text-shadow' : '0 5px 10px'
        });
    }
});

var mode = document.getElementById("mode");
var darkmode = document.getElementById("darkmode");
var lightmode = document.getElementById("lightmode");

function dark(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "silver";
    darkmode.style.display = "none";
    lightmode.style.display = "block";
    mode.style.backgroundColor = "silver";
    mode.style.boxShadow = "0 0 100px whitesmoke";
    navigation.style.backgroundColor = "black";
}
function light(){
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "#262626";
    lightmode.style.display = "none";
    darkmode.style.display = "block";
    mode.style.backgroundColor = "#262626"
    mode.style.boxShadow = "0 0 100px #262626"
    navigation.style.backgroundColor = "whitesmoke"
}


$(document).ready(function(){
    $("#darkmode").click(function(){
        $('#seaimg').css("filter","brightness(20%)")
    })
    $("#lightmode").click(function(){
        $('#seaimg').css("filter","brightness(100%)")
    })
});