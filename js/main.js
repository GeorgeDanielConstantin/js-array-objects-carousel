const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
];

const mainContainerEl = document.getElementById("main-container");
const thumbContainerEl = document.getElementById("thumb-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let activeImage = 0;

function switchToSlide(activeIndex) {
  activeImage = document.querySelector(".main.active");
  activeImage.classList.remove("active");

  allImages = document.querySelectorAll(".main");
  allImages[activeIndex].classList.add("active");
}

images.forEach((image, index) => {
  mainContainerEl.innerHTML += `
    <div class="main${index == activeImage ? "active" : ""}">
            <img src="img/${image.image}" alt="" />

            <div class="text">
              <h3>${image.title}</h3>
              <p>
                ${image.text}
              </p>
            </div>
          </div>
          `;

  thumbContainerEl.innerHTML += `
          <div class="thumb">
            <img src="${image.image}" alt="" />
          </div>`;
});

nextBtn.addEventListener("click", () => {
  activeImage++;
  switchToSlide(activeImage);
});
