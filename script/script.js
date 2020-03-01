
  AOS.init();
//var logoHomePosition = $('.homeBackground').height() - $('#homeBackground').offset().top+135;
$(document).ready(function(){    
  //var logoHomePosition = $('.homeBackground').height() - $('#homeBackground').offset().top+135;
  console.log($('.homeBackground').height() - $('#homeBackground').offset().top+135);
  
  var logoHomePosition = $(window).height()-$('#homeBackground').height();
  console.log(logoHomePosition);
  $('#homeBackground').css('top',logoHomePosition);
});

$(window).scroll(function(){
    /*if ($(window).scrollTop() >= 150) {
      $('#homeBackground').removeClass('fixed-boxHome');
    }
    else {
      $('#homeBackground').addClass('fixed-boxHome');
    }
    if(
      $(window).scrollTop()  < $('#homeBackground').height()+135
    )
    {
        $('#homeBackground').addClass('fixed-boxHome');
    }
    if(
      $('#homeBackground').offset().top >= $('#homeBackgroundFull').height()
    )
    {
        $('#homeBackground').removeClass('fixed-boxHome'); // restore when you scroll up
        
    }*/


    if(
      $(window).scrollTop() < $('#infoHome').height()
    )
    {
        $('#infoHome').addClass('fixed-boxHome');
    }
    if(
      $('#infoHome').offset().top >= $('#homeBackgroundFull').height()
    )
    {
        $('#infoHome').removeClass('fixed-boxHome'); // restore when you scroll up
        
    }

});





/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  var slideIndex = 1;
  showSlides(slideIndex);

  

  function plusSlides(n) {
    showSlides(slideIndex += n);
    
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
    
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var titles = document.getElementsByClassName("myTitles");
    var titlesMobile = document.getElementsByClassName("myMobileTitles");

    var dots = document.getElementsByClassName("progressLine");
    

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        titles[i].className = "mt-5 d-none d-lg-none myTitles experienceCategory animated fadeIn";
        titlesMobile[i].className = "mt-lg-5 text-black myMobileTitles d-none  animated fadeIn"; 
 
        console.log(titlesMobile[i]);
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active animated fadeInUp faster", "");
        dots[i].className = dots[i].className.replace(" fadeOutUp", "");
      }
      document.getElementById("currentSlide").innerHTML = slideIndex;
    slides[slideIndex-1].style.display = "flex";
    titles[slideIndex-1].className = "mt-5 d-none d-lg-block myTitles experienceCategory animated fadeIn"; 
    titlesMobile[slideIndex-1].className = "mt-lg-5 text-black myMobileTitles  animated fadeIn"; 

    dots[slideIndex-1].className += " active animated fadeInUp faster";
    dots[slideIndex-2].className += " animated fadeOutUp";  

    
  }

  

  $(document).ready(function(){
    
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  