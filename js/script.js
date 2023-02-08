const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const scoreBoard = document.querySelector(".score-board");
const pop = document.querySelector("#pop");

let tanahSebelumnya;
let finish;
let score;

function randomTanah(tanah) {
  const angkaRandom = Math.floor(Math.random() * tanah.length);
  const tanahRandom = tanah[angkaRandom];
  if (tanahRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tanahRandom;
  return tanahRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function spawnTikus() {
  const spawnTanah = randomTanah(tanah);
  const waktuRandom = randomWaktu(300, 800);
  spawnTanah.classList.add("muncul");

  setTimeout(() => {
    spawnTanah.classList.remove("muncul");
    if (!finish) {
      spawnTikus();
    }
  }, waktuRandom);
}

function start() {
  finish = false;
  score = 0;
  scoreBoard.textContent = 0;
  spawnTikus();

  setTimeout(() => {
    finish = true;
  }, 10000);
}

function pukul() {
  score++;
  this.parentNode.classList.remove("muncul");
  pop.play();
  scoreBoard.textContent = score;
}

tikus.forEach((clickTikus) => {
  clickTikus.addEventListener("click", pukul);
});
