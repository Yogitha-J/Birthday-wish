const btn = document.getElementById("startBtn");
const wish = document.getElementById("wish");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  music.play();              // browser allows after click
  wish.classList.remove("hidden");
  btn.style.display = "none";
});
