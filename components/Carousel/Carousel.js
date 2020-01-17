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
const newCarousel = document.querySelector(".carousel-container");
console.log(newCarousel);
newCarousel.append(createCarousel())

function createCarousel() {
  const carouselCard = document.createElement("div");
  const leftButton = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const rightButton = document.createElement("div");
  carouselCard.append(leftButton, img1, img2, img3, img4, rightButton);

  carouselCard.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");
  // img1.id.add("one");
  // img2.id.add("two");
  // img3.id.add("three");
  // img4.id.add("four");

  leftButton.textContent = "\u25C0";
  rightButton.textContent = "\u25B6";
  img1.setAttribute("src", "./assets/carousel/mountains.jpeg");
  img2.setAttribute("src", "./assets/carousel/computer.jpeg");
  img3.setAttribute("src", "./assets/carousel/trees.jpeg");
  img4.setAttribute("src", "./assets/carousel/turntable.jpeg");

  return carouselCard;
}

// const image1 = document.querySelector("#one");
// const image2 = document.querySelector("#two");
// const image3 = document.querySelector("#three");
// const image4 = document.querySelector("#four");
// let imgArray =[img1,img2,img3,img4]
// let currentIndex =0;
// showLeft() {
//   imageArray.forEach(image => {
//     image.style.display = 'none';
//     });
//     this.currentIndex === 0 ? this.currentIndex = this.imageArray.length-1 : this.currentIndex--;
//     this.imageArray[this.currentIndex].style.display = 'block';
//   }

