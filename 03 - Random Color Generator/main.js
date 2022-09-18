window.onload = function () {
  addColor();
  addc();
};

// for (let i = 1; i <= 9; i++) {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   document.querySelector(".container").appendChild(box);
//   box.style.cursor = "pointer";
//   box.addEventListener("click", () => {
//     console.log(box.innerHTML);
//     navigator.clipboard.writeText(box.innerHTML);
//   });
// }

let box = document.querySelectorAll(".box");
for (let i = 0; i < 9; i++) {
  box[i].addEventListener("click", () => {
    console.log(box[i].innerHTML);
    navigator.clipboard.writeText(box[i].innerHTML);
  });
}
const btn = document.querySelector(".btn");
const randomColorBlock = document.querySelectorAll(".box");

function RandomHexColorCode() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  var color = "";

  for (var i = 0; i < colorLength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#" + color;
}

function addColor() {
  randomColorBlock.forEach((e) => {
    var newColor = RandomHexColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  });
}
let nam = document.getElementById("name");
function addc() {
  var newColor = RandomHexColorCode();
  nam.style.color = newColor;
}
