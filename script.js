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
    var lengtheg = isNarrowScreen ? 100 : 100;

    // Helper function to adjust sections
    function adjustSection(selector, props) {
        $(selector).css(props);
    }

    // Get offset top positions of sections
    var navConTop = $('#nav_con').offset().top;
    var homeTop = $('#vl-home').offset().top;
    var aboutMeTop = $('#tellme').offset().top;
    var schoolTop = $('#school').offset().top;
    var collegeTop = $('#college').offset().top;
    var embeddedTop = $('#embedded').offset().top;
    var caseTop = $('#case').offset().top;
    var libTop = $('#lib').offset().top;
    var officeTop = $('#office_1').offset().top;
    var mobileTop = $('#mobile').offset().top;

    // Adjust navbar and home section
    if (scrollTop > 10) {
        $('#nav_con').hide(500);
        adjustSection('#vl-home', { 'height': isNarrowScreen ? '35%' : '30%' });
    } else {
        $('#nav_con').show(500);
        adjustSection('#vl-home', { 'height': '0vh' });
    }

    // Adjust about_me section
    if (scrollTop < aboutMeTop - lengtheg) {
        adjustSection('#about_me', { 'left': '20%', 'opacity': '0%' });
        adjustSection('#vl-about', { 'height': '0vh' });
    } else {
        var aboutLeft = isNarrowScreen ? '0%' : '10%';
        adjustSection('#about_me', { 'left': aboutLeft, 'opacity': '100%' });
        adjustSection('#vl-about', { 'height': '75vh' });
    }

    // EDUCATION 
    // SCHOOL
    if (scrollTop < schoolTop - lengtheg * 2) {
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
    if (scrollTop < collegeTop - lengtheg * 2) {
        adjustSection('#college', { 'left': '20%', 'opacity': '0%' });
    } else {
        var collegeLeft = isNarrowScreen ? '5%' : '10%';
        adjustSection('#college', { 'left': collegeLeft, 'opacity': '90%' });
    }

    // EMBEDDED
    if (scrollTop < embeddedTop - lengtheg * 2) {
        adjustSection('#embedded', { 'right': '10%', 'opacity': '0%' });
    } else {
        var embeddedRight = isNarrowScreen ? '1%' : '5%';
        adjustSection('#embedded', { 'right': embeddedRight, 'opacity': '90%' });
    }

    // WORK and PROJECT
    if (scrollTop < caseTop - lengtheg * 2) {
        adjustSection('#case', { 'text-shadow': '0 0 0px' });
        adjustSection('#vl-work', { 'height': '0vh' });
    } else {
        adjustSection('#case', { 'text-shadow': '0 0 25px aqua' });
        adjustSection('#vl-work', { 'height': '70vh' });
    }

    // LIBRARIAN
    if (scrollTop < libTop - lengtheg * 2) {
        adjustSection('#lib', { 'left': '20%', 'opacity': '0%' });
    } else {
        var libLeft = isNarrowScreen ? '5%' : '10%';
        adjustSection('#lib', { 'left': libLeft, 'opacity': '90%' });
    }

    // OFFICE_1
    if (scrollTop < officeTop - lengtheg * 2) {
        adjustSection('#office_1', { 'right': '15%', 'opacity': '0%' });
    } else {
        var officeRight = isNarrowScreen ? '5%' : '5%'; // This condition is redundant, simplified it
        adjustSection('#office_1', { 'right': officeRight, 'opacity': '90%' });
    }

    // CONTACT 
    if (scrollTop < mobileTop - lengtheg * 2) {
        adjustSection('#mobile', { 'text-shadow': '0 0 0px' });
    } else {
        adjustSection('#mobile', { 'text-shadow': '0 0 25px aqua' });
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

// Common settings for tag cloud

var commonTagCloudSettings = {
    entries: [
        { label: 'C-PROGRAMMING', url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        { label: 'C++', url: "https://en.wikipedia.org/wiki/C++" },
        { label: 'Python', url: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
        { label: 'HTML', url: "https://en.wikipedia.org/wiki/HTML" },
        { label: 'CSS', url: "https://en.wikipedia.org/wiki/CSS" },
        { label: 'JAVASCRIPT', url: "https://en.wikipedia.org/wiki/JavaScript" },
        { label: 'JQuery', url: "https://en.wikipedia.org/wiki/JQuery" },
        { label: 'SHELL SCRIPT', url: "https://en.wikipedia.org/wiki/Shell_script" },
        { label: 'YOCTO', url: "https://en.wikipedia.org/wiki/Yocto_Project" },
        { label: 'RDK-B', url: "https://wiki.rdkcentral.com/" },
        { label: 'LINUX', url: "https://en.wikipedia.org/wiki/Linux" }
    ],
    radius: '65%',
    radiusMin: 75,
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'Dongle',
    fontSize: '30',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fonttoUppercase: true
};

// Function to initialize tag cloud
function initializeTagCloud(selector, bgColor, fontColor) {
    var settings = Object.assign({}, commonTagCloudSettings, {
        bgDraw: true,
        bgColor: bgColor,
        fontColor: fontColor
    });

    if ($(window).width() < 900) {
        settings.width = '350vh';
        settings.height = '350vh';
    } else {
        settings.width = '500vh';
        settings.height = '500vh';
    }

    $(selector).svg3DTagCloud(settings);
}

$(document).ready(function() {
    initializeTagCloud('#taglight', 'none', '#262626');
    initializeTagCloud('#tagdark', 'none', 'whitesmoke');
});

// Common settings for tag cloud

// PROJECT FOR MOBILE
document.addEventListener("DOMContentLoaded", () => {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const totalItems = sliderItems.length;
    let currentIndex = 0;

    const updateSlider = () => {
      const slideWidth = sliderItems[0].offsetWidth+20;
      const newTransform = -currentIndex * slideWidth;
      gsap.to(sliderTrack, { x: newTransform, duration: 0.5, ease: 'power2.inOut' });
    };

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateSlider();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateSlider();
    });

    let startX = 0;
    let isDragging = false;

    sliderTrack.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    });

    sliderTrack.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const diffX = e.touches[0].clientX - startX;
      if (diffX > 50) {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider();
        isDragging = false;
      } else if (diffX < -50) {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
        isDragging = false;
      }
    });

    sliderTrack.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('resize', updateSlider);
});
  
//PROJECT FOR LARGE WINDOW
$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
}); 