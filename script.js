const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const askYes = document.getElementById("askYes");
const askNo = document.getElementById("askNo");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const askImage = document.getElementById("askImage");

let noClickedOnce = false;

noBtn.addEventListener("mouseenter", function() {
    noBtn.style.position = "absolute";

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", function() {
    document.querySelector("#page1 h1").innerText =
        "فدوةةةة اختاريتي بنفسج ✨";

    setTimeout(function() {
        page1.style.display = "none";
        page2.classList.remove("hidden");
    }, 2000);
});

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

function celebrate() {
    document.querySelector("#page2 h1").innerText = "فدوةةةةةة💍💙";

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
}


