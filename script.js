// Button aur Card Select
const surpriseBtn = document.getElementById("surpriseBtn");
const card = document.getElementById("card");
const photo = document.getElementById("photo");
const music = document.getElementById("music");
const thankMsg = document.getElementById("thankMsg");
const nextPageBtn = document.getElementById("nextPageBtn");

// Images List
const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg"
];

let index = 0;

// Button Click
surpriseBtn.addEventListener("click", () => {

    // Card Show
 card.classList.add("show");
 createConfetti();

    // Button Hide
    surpriseBtn.style.display = "none";
  music.play().catch(error => {
    console.log("Music play blocked");
});
    thankMsg.classList.add("show");
    nextPageBtn.classList.add("show");

    // First Image
  photo.style.opacity = "0";

setTimeout(()=>{

    photo.src = images[index];

    photo.style.opacity = "1";

},400);
    // Slideshow Start
    setInterval(() => {

        index++;

        if(index >= images.length){
            index = 0;
        }

        photo.src = images[index];

    }, 2500);

});
function createConfetti(){

    const confetti = document.getElementById("confetti");

    let count = 0;

    let interval = setInterval(()=>{

        let flower = document.createElement("div");

        flower.classList.add("confetti-piece");

        flower.innerHTML = "🌸";

        flower.style.left = Math.random() * 100 + "vw";

        flower.style.animationDuration = (5 + Math.random()*5) + "s";

        confetti.appendChild(flower);


        setTimeout(()=>{
            flower.remove();
        },10000);


        count++;

        if(count >= 50){
            clearInterval(interval);
        }

    },200);

}
const plates = document.querySelectorAll(".plate");

plates.forEach(plate => {

    plate.addEventListener("click", () => {

        plate.classList.toggle("active");

    });

});

