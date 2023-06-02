const img1 = document.querySelector('#svg1');
const img2 = document.querySelector('#svg2');
const img3 = document.querySelector('#svg3');
const img4 = document.querySelector('#svg4');
const imgContainer = [img1, img2, img3, img4];
let i = 0;
let intervalId = null;

function changeImage() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    console.log(i);
    const currentImg = imgContainer[i];
    const nextImg = imgContainer[(i + 1) % imgContainer.length];
    currentImg.classList.remove("visible");
    currentImg.classList.add("hidden");
    nextImg.classList.add("visible");
    nextImg.classList.remove("hidden");
    i = (i + 1) % imgContainer.length;
  }, 3000);
}

changeImage();
