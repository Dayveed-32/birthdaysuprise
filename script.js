const surpriseBtn = document.getElementById("surpriseBtn");
const letterSection = document.getElementById("letter");
const celebrateBtn = document.getElementById("celebrateBtn");
surpriseBtn.addEventListener("click", function () {

    letterSection.scrollIntoView({
        behavior: "smooth"
    });

    surpriseBtn.textContent = "Your Letter Is Waiting Below ❤️";

});
const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");

    const heartSymbols = ["❤️", "💖", "💕", "💗", "💘", "🌸"];

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    heart.style.animationDuration = Math.random() * 3 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 8000);

}
setInterval(createHeart, 700);
celebrateBtn.addEventListener("click", function () {

    for (let i = 0; i < 50; i++) {

        setTimeout(function () {

            createHeart();

        }, i * 50);

    }

    celebrateBtn.textContent = "Happy Birthday, Praise! 🎂❤️";

    alert(
        "🎉 HAPPY BIRTHDAY, PRAISE! 🎂❤️\n\n" +
        "May God bless your new age with joy, love, " +
        "peace, and beautiful opportunities. 🙏🏽💖\n\n" +
        "With love, KingDavid ❤️"
    );

});