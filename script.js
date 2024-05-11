$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    // Adjust navbar and home section
    if (scrollTop > 10) {
        $('#nav').css('background-color', 'inherit');
        $('#vl-home').css('height', '35%');
    } else {
        $('#nav').css('background-color', 'unset');
        $('#vl-home').css('height', '0vh');
    }

    // Adjust about_me section
    if (scrollTop < 400) {
        $('#about_me').css({
            'left': '20%',
            'opacity': '0%'
        });
    } else {
        if (window.matchMedia("(max-width: 1000px)").matches) {
            $('#about_me').css({
                'left': '0%',
                'opacity': '100%'
            });
        } else {
            $('#about_me').css({
                'left': '15%',
                'opacity': '100%'
            });
        }
    }
    // Adjust star
    if (scrollTop > 600) {
        $('#star').css('text-shadow', '0 0 10px');
    } else {
        $('#star').css('text-shadow', '0 0 0px');
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