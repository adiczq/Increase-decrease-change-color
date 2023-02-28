const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const resetBtn = document.querySelector(".reset");
const p = document.querySelector("p");

let fontSize = 36;

const increase = () => {
  fontSize += 5;
  p.style.fontSize = fontSize + "px";
};

const decrease = () => {
  if (fontSize <= 20) return;
  fontSize -= 5;
  p.style.fontSize = fontSize + "px";
};

const colorChange = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  p.style.color = `rgb(${r},${g},${b})`;
};

const reset = () => {
  p.style.fontSize = 36 + "px";
  p.style.color = "white";
};

sizeUp.addEventListener("click", increase);
sizeDown.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
colorBtn.addEventListener("click", colorChange);
