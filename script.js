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
    var isNarrowScreen = window.matchMedia("(max-width: 900px)").matches;
    var lengtheg = 0;
    if(isNarrowScreen){
        lengtheg = 100;
    }

    // Helper function to adjust sections
    function adjustSection(selector, props) {
        $(selector).css(props);
    }

    // Adjust navbar and home section
    if (scrollTop > 10) {
        $('#nav_con').hide(500);
        adjustSection('#vl-home', { 'height': isNarrowScreen ? '35%' : '30%' });
    } else {
        $('#nav_con').show(500);
        adjustSection('#vl-home', { 'height': '0vh' });
    }

    // Adjust about_me section
    if (scrollTop < 500 + lengtheg) {
        adjustSection('#about_me', { 'left': '20%', 'opacity': '0%' });
        adjustSection('#vl-about', { 'height': '0vh' });
    } else {
        var aboutLeft = isNarrowScreen ? '0%' : '10%';
        adjustSection('#about_me', { 'left': aboutLeft, 'opacity': '100%' });
        adjustSection('#vl-about', { 'height': '75vh' });
    }

    // EDUCATION 
    // SCHOOL
    if (scrollTop < (1000 + lengtheg * 2)) {
        adjustSection('#school', { 'right': '20%', 'opacity': '0%' });
        adjustSection('#vl-edu', { 'height': '0vh' });
        adjustSection('#book', { 'text-shadow': '0 0 0px' });
    } else {
        var schoolRight = isNarrowScreen ? '0' : '10%';
        adjustSection('#school', { 'right': schoolRight, 'opacity': '90%' });
        adjustSection('#vl-edu', { 'height': '85vh' });
        adjustSection('#book', { 'text-shadow': '0 0 25px aqua' });
    }

    // COLLEGE
    if (scrollTop < (1250 + lengtheg * 2)) {
        adjustSection('#college', { 'left': '20%', 'opacity': '0%' });
    } else {
        var collegeLeft = isNarrowScreen ? '5%' : '10%';
        adjustSection('#college', { 'left': collegeLeft, 'opacity': '90%' });
    }

    // EMBEDDED
    if (scrollTop < (1450 + lengtheg * 2)) {
        adjustSection('#embedded', { 'right': '10%', 'opacity': '0%' });
    } else {
        var embeddedRight = isNarrowScreen ? '1%' : '5%';
        adjustSection('#embedded', { 'right': embeddedRight, 'opacity': '90%' });
    }

    // WORK and PROJECT
    if (scrollTop < (1750 + lengtheg * 3) ){
        adjustSection('#case', { 'text-shadow': '0 0 0px' });
        adjustSection('#vl-work', { 'height': '0vh' });
    } else {
        adjustSection('#case', { 'text-shadow': '0 0 25px aqua' });
        adjustSection('#vl-work', { 'height': '70vh' });
    }

    // LIBRARIAN
    if (scrollTop < (1850 + lengtheg * 3) ){
        adjustSection('#lib', { 'left': '20%', 'opacity': '0%' });
    } else {
        var libLeft = isNarrowScreen ? '5%' : '10%';
        adjustSection('#lib', { 'left': libLeft, 'opacity': '90%' });
    }

    // OFFICE_1
    if (scrollTop < (2000 + lengtheg * 3)) {
        adjustSection('#office_1', { 'right': '15%', 'opacity': '0%' });
    } else {
        var officeRight = isNarrowScreen ? '5%' : '5%'; // This condition is redundant, simplified it
        adjustSection('#office_1', { 'right': officeRight, 'opacity': '90%' });
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


$(document).ready(function() {
    const scrollThresholdStart = 2000;
    const scrollThresholdEnd = 3000;
    const $project = $('.project');

    $(window).on('scroll', function() {
      const scrollTop = $(this).scrollTop();

      if (scrollTop > scrollThresholdStart && scrollTop < scrollThresholdEnd) {
        const scrollAmount = (scrollTop - scrollThresholdStart) / (scrollThresholdEnd - scrollThresholdStart);
        let transformValue;
        if ($(window).width() > 800) {
          const direction = scrollTop > scrollThresholdStart ? -1 : 1; // Determine direction of scroll
          transformValue = `translateX(${direction * scrollAmount * 100}px)`; // Adjust the multiplier to control speed
        } else {
          transformValue = 'none'; // Reset transform for mobile screens
        }
        $('.card').css('transform', transformValue);
      }
    });
});