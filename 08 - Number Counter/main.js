let counter = document.getElementById("counter");
let saveNumber = document.getElementById("numberSaver");
let count = 0;
function resetcount() {
  counter.innerHTML = count = 0;
}
function upCount() {
  counter.innerHTML = ++count;
}

function downCount() {
  counter.innerHTML = --count;
}

function saveCount() {
  let newElement = document.createElement("div");
  newElement.setAttribute("class", "number");
  newElement.innerHTML = count;
  saveNumber.appendChild(newElement);
}
