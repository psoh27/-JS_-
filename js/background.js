const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
const background = document.createElement("img");
const container = document.querySelector("#img_container");
background.src = `img/${randomImg}`;
background.classList.add("bg-img");
container.appendChild(background);
