
  AOS.init();

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('#top').addClass('fixed-header');
    }
    else {
        $('#top').removeClass('fixed-header');
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
        titles[i].className = "mt-5 d-none d-lg-none myTitles";
        titlesMobile[i].className = "mt-5 text-black myMobileTitles d-none"; 
 
        console.log(titlesMobile[i]);
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active animated fadeInUp faster", "");
        dots[i].className = dots[i].className.replace(" fadeOutUp", "");
      }
      document.getElementById("currentSlide").innerHTML = slideIndex;
    slides[slideIndex-1].style.display = "flex";
    titles[slideIndex-1].className = "mt-5 d-none d-lg-block myTitles"; 
    titlesMobile[slideIndex-1].className = "mt-5 text-black myMobileTitles "; 

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

  