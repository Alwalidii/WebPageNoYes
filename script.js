const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const page1 = document.getElementById("page1");
const askPage = document.getElementById("askPage");
const page2 = document.getElementById("page2");

const askYes = document.getElementById("askYes");
const askNo = document.getElementById("askNo");

const askImage = document.getElementById("askImage");

const dateImage = document.getElementById("dateImage");
const dateText = document.getElementById("dateText");

let noClickedOnce = false;

noBtn.addEventListener("mouseenter", function() {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});

yesBtn.addEventListener("click", function() {
    document.querySelector("#page1 h1").innerText =
        "فدوةةةة اختاريتي بنفسج ✨";

    setTimeout(function() {
        page1.style.display = "none";
        askPage.classList.remove("hidden");

        startAskSequence();
    }, 4000);
});

function startAskSequence() {
    const slides = [
        { src: "catflower.jpg", text: "فديوم خلي نطلع سوا " },
        { src: "draw.jpg", text: "حتى نكمل هالرسمة لان ماكدر انام اذا ماشفتها كاملة" }
    ];

    const progressBar = document.getElementById("progressBar");
    let index = 0;
    const slideDuration = 5000;

    function showSlide() {
        dateImage.src = slides[index].src;
        dateText.innerText = slides[index].text;

        progressBar.style.transition = "none";
        progressBar.style.width = "0%";
        setTimeout(() => {
            progressBar.style.transition = `width ${slideDuration}ms linear`;
            progressBar.style.width = "100%";
        }, 50);

        index++;
        if (index < slides.length) {
            setTimeout(showSlide, slideDuration);
        } else {
            setTimeout(function() {
                askPage.style.display = "none";
                page2.classList.remove("hidden");
            }, slideDuration);
        }
    }

    showSlide();
}


askYes.addEventListener("click", function() {
    celebrate();
});

askNo.addEventListener("click", function() {
    if (!noClickedOnce) {
        document.querySelector("#page2 h1").innerText =
            "شجاي تحجين؟؟؟ حلوة؟؟";
        askImage.src = "img3.jpg";
        noClickedOnce = true;
    } else {
        document.querySelector("#page2 h1").innerText =
            "لا الله عليج حلوة؟";
        askImage.src = "img2.jpg";
        askNo.style.display = "none";
    }
});


const loveLetter = document.getElementById("loveLetter");
const letterPart1 = document.getElementById("letterPart1");
const letterPart2 = document.getElementById("letterPart2");
const okLetter1 = document.getElementById("okLetter1");
const okLetter2 = document.getElementById("okLetter2");


function celebrate() {
    document.querySelector("#page2 h1").innerText = "فدوةةةةةة";
    askYes.style.display = "none";
    askNo.style.display = "none";

    for (let i = 0; i < 120; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        confetti.style.backgroundColor = ["#00bcd4", "#ff4081", "#ffffff", "#00838f"][Math.floor(Math.random() * 4)];
        document.body.appendChild(confetti);
    }

    setTimeout(function() {
        page2.style.display = "none";
        loveLetter.style.display = "flex";
        letterPart1.classList.remove("hidden");
        createStars(50);
    }, 3000);
}

function createStars(numStars = 30) {
    const starsContainer = document.querySelector(".stars");
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 2 + "s";
        star.style.animationDuration = 1 + Math.random() * 2 + "s";

        starsContainer.appendChild(star);
    }
}


okLetter1.addEventListener("click", function() {
    letterPart1.classList.add("hidden");
    letterPart2.classList.remove("hidden");
});

okLetter2.addEventListener("click", function() {
    letterPart2.classList.add("hidden");

});
const spotifyPlayer = document.getElementById("spotifyPlayer");

okLetter2.addEventListener("click", function() {
    letterPart2.classList.add("hidden");

    spotifyPlayer.style.position = "fixed";
    spotifyPlayer.style.top = "50%";
    spotifyPlayer.style.left = "50%";
    spotifyPlayer.style.transform = "translate(-50%, -50%)";
    spotifyPlayer.style.zIndex = "1000";
});
