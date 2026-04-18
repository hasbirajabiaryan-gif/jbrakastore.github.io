// LOADING
let load = document.querySelector(".progress");
let width = 0;

let interval = setInterval(() => {
  width += 10;
  load.style.width = width + "%";

  if (width >= 100) {
    clearInterval(interval);
    document.getElementById("loading").style.display = "none";
  }
}, 200);

// POPUP
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// JOIN LINK
function join() {
  window.location.href = "https://whatsapp.com/channel/0029Vb87YbdG8l57RLIDMQ3U";
}