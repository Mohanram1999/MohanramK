$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    // Adjust navbar and home section
    if (scrollTop > 10) {
        $('#nav_con').hide(500);
        $('#vl-home').css('height', '30%');
        if (window.matchMedia("(max-width: 800px)").matches) {
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
    // SCHOOL
    if (scrollTop < 1000) {
        $('#school').css({
            'right': '20%',
            'opacity': '0%'
        });
        $('#vl-edu').css({
            'height' : '0vh'
        });
        $('#book').css({
            'text-shadow' : '0 0 0px'
        });
    } else {
        var schoolRight = window.matchMedia("(max-width: 800px)").matches ? '0' : '15%';
        $('#school').css({
            'right': schoolRight,
            'opacity': '90%'
        });
        $('#vl-edu').css({
            'height' : '85vh'
        });
        $('#book').css({
            'text-shadow' : '0 0 25px aqua'
        });
    }
    //COLLEGE
    if (scrollTop < 1200) {
        $('#college').css({
            'left': '20%',
            'opacity': '0%'
        });
    } else {
        var schoolLeft = window.matchMedia("(max-width: 800px)").matches ? '5%' : '15%';
        $('#college').css({
            'left': schoolLeft,
            'opacity': '90%'
        });
    }
    //Embeddded
    if (scrollTop < 1400) {
        $('#embedded').css({
            'right': '10%',
            'opacity': '0%'
        });
    } else {
        var schoolLeft = window.matchMedia("(max-width: 800px)").matches ? '1%' : '5%';
        $('#embedded').css({
            'right': schoolLeft,
            'opacity': '90%'
        });
    }
    // EDUCATION 

    //WORK and PROJECT
    if (scrollTop < 1600) {
        $('#case').css({
            'text-shadow' : '0 0 0px'
        });
        $('#vl-work').css({
            'height' : '0vh'
        });
    }
    else{
        $('#case').css({
            'text-shadow' : '0 0 25px aqua'
        });
        $('#vl-work').css({
            'height' : '70vh'
        });
    }
    //LIBRARIAN
    if (scrollTop < 1700) {
        $('#lib').css({
            'left': '20%',
            'opacity': '0%'
        });
    } else {
        var schoolLeft = window.matchMedia("(max-width: 800px)").matches ? '5%' : '15%';
        $('#lib').css({
            'left': schoolLeft,
            'opacity': '90%'
        });
    }
    //OFFICE_1
    if (scrollTop < 1850) {
        $('#office_1').css({
            'right': '15%',
            'opacity': '0%'
        });
    } else {
        var schoolRight = window.matchMedia("(max-width: 800px)").matches ? '5%' : '8%';
        $('#office_1').css({
            'right': schoolRight,
            'opacity': '90%'
        });
    }
    //WORK and PROJECT
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
}
function light(){
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "#262626";
    lightmode.style.display = "none";
    darkmode.style.display = "block";
    mode.style.backgroundColor = "#262626";
    mode.style.boxShadow = "0 0 100px #262626";
}

$(document).ready(function() {
    var entries = [
        { label: 'C-PROGRAMMING' },
        { label: 'C++' },
        { label: 'Python' },
        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JAVASCRIPT' },
        { label: 'SHELL SCRIPT' },
        { label: 'YOCTO' },
        { label: 'RDK-B' }
    ];

    var defaultSettings = {
        entries: entries,
        width: 600,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor:'whitesmoke',
        fontColor: '#262626',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 2,
        fontFamily: 'Dongle',
        fontSize: '30',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fonttoUppercase: true
    };

    // Function to initialize the tag cloud with the default settings
    function initializeTagCloud(settings) {
        $('#tag').empty(); // Clear any existing tag cloud
        $('#tag').svg3DTagCloud(settings); // Initialize tag cloud
    }

    // Function to switch to dark mode
    function darkMode() {
        $('#seaimg').css("filter", "brightness(20%)");
        var $tags = $('#tag').find('text'); // Find the text elements inside the SVG
        $tags.css('fill', 'whitesmoke'); // Set font color to white
        defaultSettings.bgColor = 'black'; // Update background color in default settings
        initializeTagCloud(defaultSettings); // Re-initialize tag cloud with updated settings
    }

    // Function to switch to light mode
    function lightMode() {
        $('#seaimg').css("filter", "brightness(100%)");
        var $tags = $('#tag').find('text'); // Find the text elements inside the SVG
        $tags.css('fill', 'black'); // Set font color to black
        defaultSettings.bgColor = 'whitesmoke'; // Update background color in default settings
        initializeTagCloud(defaultSettings); // Re-initialize tag cloud with updated settings
    }

    // Initialize tag cloud with default settings
    initializeTagCloud(defaultSettings);

    // Event handler for dark mode button
    $("#darkmode").click(darkMode);

    // Event handler for light mode button
    $("#lightmode").click(lightMode);
});
