function toggleAnswer(id) {
    let answer = document.getElementById(id);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
    document.getElementById("clickSound").play();
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn1").addEventListener("click", function () {
        toggleAnswer("answer1");
    });
    document.getElementById("btn2").addEventListener("click", function () {
        toggleAnswer("answer2");
    });
    document.getElementById("btn3").addEventListener("click", function () {
        toggleAnswer("answer3");
    });
    document.getElementById("btn4").addEventListener("click", function () {
        toggleAnswer("answer4");
    });
    document.getElementById("btn5").addEventListener("click", function () {
        toggleAnswer("answer5");
    });
})

document.querySelectorAll(".ugly-button").forEach(button => {
    button.addEventListener("click", function() {
        let answerId = this.getAttribute("data-answer");
        toggleAnswer(answerId);
    });
});

function dropImage() {
    const img = document.createElement("img");
    img.src = "images/iconPrincipale.ico"; // Image temporaire (remplace par ton image)
    img.classList.add("falling-image");

    // Position aléatoire en haut de l'écran
    img.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(img);

    // Supprime l'image après l'animation
    setTimeout(() => {
        img.remove();
    }, 3000);
}