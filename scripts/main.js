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