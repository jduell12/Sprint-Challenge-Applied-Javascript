/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselContainer = document.querySelector('.carousel-container');

let carouselImgs = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];

let newCarousel = carousel(carouselImgs);
carouselContainer.appendChild(newCarousel);
console.log(newCarousel);

function carousel(imgArray){
  //create elements of carousel
  let divCarousel = document.createElement('div');
  let leftButtonDiv = document.createElement('div');
  let rightButtonDiv =document.createElement('div');

  //add classes to each element 
  divCarousel.classList.add('carousel');
  leftButtonDiv.classList.add('left-button');
  rightButtonDiv.classList.add('right-button');

  //add text content to button divs
  leftButtonDiv.innerHTML = "<";
  rightButtonDiv.innerHTML = ">"

  divCarousel.appendChild(leftButtonDiv);
  
  //create img elements from imgArray with corresponding sources
  imgArray.forEach(item => {
    let img = document.createElement('img');
    img.src = item;
    divCarousel.appendChild(img);
  })

  //give current index to first image on carousel div
  divCarousel.childNodes[1].classList.add('currentIndex');
  divCarousel.appendChild(rightButtonDiv);

  return divCarousel;
}