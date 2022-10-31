const body = document.querySelector("body");

const IMG_NUMBER = 5;

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number + 1;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/bg${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
    // console.log(randomNumber);
}

init();
setInterval(init,3000);