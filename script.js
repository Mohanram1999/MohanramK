$(document).ready(function() {
    $("#darkmode").click(function() {
        $('#seaimg').css("filter", "brightness(20%)");
        $('#taglight').css("display", "none");
        $('#tagdark').css("display", "block");
    });

    $("#lightmode").click(function() {
        $('#seaimg').css("filter", "brightness(100%)");
        $('#taglight').css("display", "block");
        $('#tagdark').css("display", "none");
    });
});


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
    if (scrollTop < 500) {
        $('#about_me').css({
            'left': '20%',
            'opacity': '0%'
        });
        $('#vl-about').css({
            'height' : '0vh'
        });
    } else {
        var aboutLeft = window.matchMedia("(max-width: 800px)").matches ? '0%' : '10%';
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
        var schoolRight = window.matchMedia("(max-width: 800px)").matches ? '0' : '10%';
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
    if (scrollTop < 1250) {
        $('#college').css({
            'left': '20%',
            'opacity': '0%'
        });
    } else {
        var schoolLeft = window.matchMedia("(max-width: 800px)").matches ? '5%' : '10%';
        $('#college').css({
            'left': schoolLeft,
            'opacity': '90%'
        });
    }
    //Embeddded
    if (scrollTop < 1450) {
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
    if (scrollTop < 1650) {
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
    if (scrollTop < 1850) {
        $('#lib').css({
            'left': '20%',
            'opacity': '0%'
        });
    } else {
        var schoolLeft = window.matchMedia("(max-width: 800px)").matches ? '5%' : '10%';
        $('#lib').css({
            'left': schoolLeft,
            'opacity': '90%'
        });
    }
    //OFFICE_1
    if (scrollTop < 2000) {
        $('#office_1').css({
            'right': '15%',
            'opacity': '0%'
        });
    } else {
        var schoolRight = window.matchMedia("(max-width: 800px)").matches ? '5%' : '5%';
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

//PROJECT SECTION
$(document).ready(function() {
    // Add content to each topic
    $("#smcc").each(function() {
        $(this).append('<div class="content-smcc"> hello</div>');
    });
});


// SKILLS Section SVG ANIMATION
var tagCloudSettings = {
    entries: [
        { label: 'C-PROGRAMMING', url:"https://en.wikipedia.org/wiki/C_(programming_language)" },
        { label: 'C++', url:"https://en.wikipedia.org/wiki/C++"},
        { label: 'Python', url:"https://en.wikipedia.org/wiki/Python_(programming_language)" },
        { label: 'HTML', url:"https://en.wikipedia.org/wiki/HTML" },
        { label: 'CSS', url:"https://en.wikipedia.org/wiki/CSS" },
        { label: 'JAVASCRIPT', url:"https://en.wikipedia.org/wiki/JavaScript" },
        { label: 'SHELL SCRIPT', url:"https://en.wikipedia.org/wiki/Shell_script" },
        { label: 'YOCTO', url:"https://en.wikipedia.org/wiki/Yocto_Project" },
        { label: 'RDK-B', url:"https://wiki.rdkcentral.com/" }
    ],
    width: '100%',
    height: '100%',
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'whitesmoke',
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


// Initialize tag cloud with initial settings
$(document).ready(function() {
    $('#taglight').svg3DTagCloud(tagCloudSettings);
});

var tagdarkSettings = {
    entries: [
        { label: 'C-PROGRAMMING', url:"https://en.wikipedia.org/wiki/C_(programming_language)" },
        { label: 'C++', url:"https://en.wikipedia.org/wiki/C++"},
        { label: 'Python', url:"https://en.wikipedia.org/wiki/Python_(programming_language)" },
        { label: 'HTML', url:"https://en.wikipedia.org/wiki/HTML" },
        { label: 'CSS', url:"https://en.wikipedia.org/wiki/CSS" },
        { label: 'JAVASCRIPT', url:"https://en.wikipedia.org/wiki/JavaScript" },
        { label: 'SHELL SCRIPT', url:"https://en.wikipedia.org/wiki/Shell_script" },
        { label: 'YOCTO', url:"https://en.wikipedia.org/wiki/Yocto_Project" },
        { label: 'RDK-B', url:"https://wiki.rdkcentral.com/" }
    ],
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'black',
    fontColor: 'whitesmoke',
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


// Initialize tag cloud with initial settings
$(document).ready(function() {
    $('#tagdark').svg3DTagCloud(tagdarkSettings);
});

