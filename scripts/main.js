 document.getElementById("navbar").addEventListener("click", display_nav);    

        function display_nav(){
            let mobileNav = document.querySelector(".mobile_links");
    
            if (mobileNav.style.display === "block"){
                mobileNav.style.display = "none";
        
            } else {
                mobileNav.style.display = "block";
            }  
          
        };


var slideIndexTwo = 0;
runSlides();

function runSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexTwo++;
  if (slideIndexTwo > slides.length) {slideIndexTwo = 1}    
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slides[slideIndexTwo-1].style.display = "block";  
  dots2[slideIndexTwo-1].className += " active2";
  setTimeout(runSlides, 3000); // Change image every 4 seconds
}
    
    
    
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
};

function noroffBergen() {
  document.getElementById('gmap_canvas').src = "https://www.google.com/maps/d/embed?mid=12VIqI1hsD2hUFlg-1PhM2xHNGmxGAde-&hl=en";
}


function noroffOslo() {
  document.getElementById('gmap_canvas').src = "https://www.google.com/maps/d/embed?mid=1KOdX_84cgwmBo6oDS6tzFmfgUQ15S3ib&hl=en";
} 


function noroffStavanger() {
  document.getElementById('gmap_canvas').src = "https://www.google.com/maps/d/embed?mid=1Afy65N70tkZUhRFXYzW1WRi58k4J1BxD&hl=en";
} 

  
function noroffKristiansand() {
  document.getElementById('gmap_canvas').src = "https://www.google.com/maps/d/embed?mid=1UaSGmOQZU_KD0f82vt5j1-bdyLshJvS7&hl=en";
} 

//Prevents google map links from jumping to the top of the page
$('a.gmap_links').click(function(e)
{
    e.preventDefault();
});

// accordion 
function toggleDisplay1() {
  var y = document.getElementById("accordionTrigger1");
  y.style.display ="block";
  var x = document.getElementById("accordionContent1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
}

function toggleDisplay2() {
  var y = document.getElementById("accordionTrigger2");
  y.style.display ="block";
  var x = document.getElementById("accordionContent2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleDisplay3() {
  var y = document.getElementById("accordionTrigger3");
  y.style.display ="block";
  var x = document.getElementById("accordionContent3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
