$(document).ready(function () {
    
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Python Developer",
        "Founder",
        "Author"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  