var form = document.getElementById("form");
var add = document.getElementById("add");
var remove = document.getElementById("remove");

function addelement() {
  var newelemwnt = document.createElement("input");
  var count = form.getElementsByTagName("input");
  newelemwnt.setAttribute("placeholder", "Another Field");
  newelemwnt.setAttribute("type", "text");
  form.appendChild(newelemwnt);
  if (count.length > 3) {
    remove.style.visibility = "visible";
  }
}

function removeElement() {
  var count = form.getElementsByTagName("input");
  if (count.length > 3) {
    count[count.length - 1].remove();
  }
  if (count.length < 4) {
    remove.style.visibility = "hidden";
  }
}
