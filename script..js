let seconds = 0;
let interval = null;

function updateDisplay() {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds % 60;

  document.getElementById("display").innerText =
    String(h).padStart(2,'0') + ":" +
    String(m).padStart(2,'0') + ":" +
    String(s).padStart(2,'0');
}

function start() {
  if (interval) return;
  interval = setInterval(function () {
    seconds++;
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  pause();
  seconds = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  let li = document.createElement("li");
  li.innerText = document.getElementById("display").innerText;
  document.getElementById("laps").appendChild(li);
}

/* FIXED TOGGLE */
function toggleHow() {
  let section = document.getElementById("howSection");

  if (section.style.display === "block") {
    section.style.display = "none";
  } else {
    section.style.display = "block";
  }
}