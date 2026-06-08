function toHappy() {
    document.getElementById("happy").src = "media/happy.png"
    document.getElementById("reacth3").textContent = "Kitty loves pets :3"
    document.body.classList.add("happy");
    document.body.classList.remove("sad");
    document.body.classList.remove("angry");
}

function toSad() {
    document.getElementById("happy").src = "media/sad.png"

    document.getElementById("reacth3").textContent = "Kitty doesn't like homework.. It wants to meow and cuddle"

    document.body.classList.add("sad");
    document.body.classList.remove("happy");
    document.body.classList.remove("angry");
}

function toAngry() {
    document.getElementById("happy").src = "media/angry.png"

    document.getElementById("reacth3").textContent = "Don't you know cats hate water? you fool."

    document.body.classList.add("angry");
    document.body.classList.remove("happy");
    document.body.classList.remove("sad");
}

let hunger = 100;

setInterval(() => {
  value -= 0.08;
  if (hunger < 0) value = 0;
  if (value <= 0) {
    value = 0;
    kittyIsHungry();
}
  document.getElementById("bar").style.width = value + "%";
}, 100);

function resetBar() {
  hunger = 100;
  document.getElementById("bar").style.width = "100%";
}

let value = 100;

setInterval(() => {
    value -= 0.1;

    if (value < 0) value = 0;

    document.getElementById("bar").style.width = value + "%";
    document.getElementById("bar-text").textContent = "Hunger " + Math.round(value) + "%";
}, 100);

function resetBar() {
    value = 100;
    document.getElementById("bar").style.width = "100%";
    document.getElementById("bar-text").textContent = "100%";
}

function kittyIsHungry() {
    document.getElementById("happy").src = "media/sad.png";
    document.getElementById("reacth3").textContent =
        "Kitty is starving... feed it! And don't forget to pet it too as compensation for making it STARVE";
    
    document.body.classList.add("sad");
    document.body.classList.remove("happy");
    document.body.classList.remove("angry");
}