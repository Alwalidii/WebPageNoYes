const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const responseImg = document.getElementById("responseImg");

let noClickCount = 0; // Track how many times No was clicked

yesBtn.addEventListener("click", function() {
    result.textContent = "You clicked Yes! 😎";
    result.style.color = "green";

    responseImg.src = "yes.jpg";
    responseImg.style.display = "block";

    noClickCount = 0; // Reset No counter if Yes is clicked
});

noBtn.addEventListener("click", function() {
    noClickCount++;


    responseImg.style.display = "block";

    if (noClickCount === 1) {

        result.textContent = "No! 😢";
        result.style.color = "red";
        responseImg.src = "no1.jpg"; // first No image
    } else {

        result.textContent = "No?";
        result.style.color = "red";
        responseImg.src = "no2.jpg"; // second No image
    }
});