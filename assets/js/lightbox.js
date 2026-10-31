const links = [...document.querySelectorAll(".gallery a")];
const lightbox = document.getElementById("lightbox");
const image = lightbox.querySelector("img");
let current = 0;

function show(index) {
  current = (index + links.length) % links.length;
  image.src = links[current].href;
  image.alt = links[current].querySelector("img").alt;
  if (!lightbox.open) lightbox.showModal();
}

links.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    show(index);
  });
});

lightbox.querySelector(".close").addEventListener("click", () => lightbox.close());
lightbox.querySelector(".prev").addEventListener("click", () => show(current - 1));
lightbox.querySelector(".next").addEventListener("click", () => show(current + 1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") show(current - 1);
  if (event.key === "ArrowRight") show(current + 1);
});
