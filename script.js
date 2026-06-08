function toHappy() {
    document.getElementById("happy").src = "media/happy.png"
    document.getElementById("reacth3").textContent = "Kitty loves pets :3"
}

function toSad() {
    document.getElementById("happy").src = "media/sad.png"
    document.getElementById("reacth3").textContent = "Kitty rebukes the sadness button, why does it even exist?"
}

function toAngry() {
    document.getElementById("happy").src = "media/angry.png"
    document.getElementById("reacth3").textContent = "Don't you know cats hate water? you fool."
}

let value = 100;

// drains the bar slowly
setInterval(() => {
  value -= 0.08; // speed of draining
  if (value < 0) value = 0;
  document.getElementById("bar").style.width = value + "%";
}, 100);

function resetBar() {
  value = 100;
  document.getElementById("bar").style.width = "100%";
}