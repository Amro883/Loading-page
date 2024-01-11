loadText = document.querySelector(".loading-text");
bg = document.querySelector(".bg");

load = 0;

const blurring = () => {
  if (load > 99) clearInterval(int);
load++;
  loadText.innerText = load + "%";
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  console.log(load);
};
const mathing = (a, b, c, d, e) => {
  return ((a - b) * (e - d)) / (c - b) + d;
};
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
let int = setInterval(blurring, 30);
