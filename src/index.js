// You can specify which plugins you need
import "./style.scss";
// import { Tooltip, Toast, Popover } from 'bootstrap';
import "bootstrap";

let slideIndex = 0;
showSlides();

function showSlides() {
  //convert to Array ref https://www.gavsblog.com/blog/htmlcollection-foreach-loop-convert-object-to-array-javascript
  let slides = Array.from(document.getElementsByClassName("slides")) ;
  slides.forEach( slide => {
  slide.style.display = "none"; 
 // console.log(slide);
  })
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}