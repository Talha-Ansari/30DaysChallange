let hour = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let am = document.getElementById("am");
function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let a = "AM";

  if (h > 12) {
    h = h - 12;
    a = "PM";
  }

  h = h < 12 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
}

setInterval(clock, 1000);
