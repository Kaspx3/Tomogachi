function toHappy() {
    document.getElementById("happy").src = "media/happy.png"
    document.body.classList.add("happy");
    document.body.classList.remove("sad");
    document.body.classList.remove("angry");
}

function toSad() {
    document.getElementById("happy").src = "media/sad.png"
    document.body.classList.add("sad");
    document.body.classList.remove("happy");
    document.body.classList.remove("angry");
}

function toAngry() {
    document.getElementById("happy").src = "media/angry.png"
    document.body.classList.add("angry");
    document.body.classList.remove("happy");
    document.body.classList.remove("sad");
}
