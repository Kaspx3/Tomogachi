const images = ["media/happy.png", "media/angry.png", "media/sad.png"];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("happy").src = images[currentIndex];
}