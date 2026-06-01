const images = ["media/happy.png", "media/angry.png", "media/sad.png"];
//let currentIndex = 0;
//
//function changeImage() {
//    currentIndex = (currentIndex + 1) % images.length;
//    document.getElementById("happy").src = images[currentIndex];
//}

function toHappy() {
    document.getElementById("happy").src = images["media/happy.png"]
}

function toSad() {
    document.getElementById("happy").src = images["media/sad.png"]
}

function toAngry() {
    document.getElementById("happy").src = images["media/angry.png"]
}