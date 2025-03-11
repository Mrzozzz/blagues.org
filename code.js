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



// Récupération des éléments
const showPopupBtn = document.getElementById("showPopup");
const closePopupBtn = document.getElementById("closePopup");
const popupContainer = document.getElementById("popupContainer");
const popup = document.getElementById("popup");
// Fonction pour afficher le pop-up
showPopupBtn.addEventListener("click", function () {
    popupContainer.classList.add("show");
});
// Fonction pour fermer le pop-up
function closePopup() {
    popupContainer.classList.remove("show");
}
// Fermer le pop-up en cliquant en dehors de la boîte
popupContainer.addEventListener("click", function (e) {
    if (e.target === popupContainer) { // Vérifie que l'on clique bien en dehors
        closePopup();
    }
});


function propostion(){
    window.location.href = "Proposition.html"
}
function about(){
    window.location.href = "about.html"
}

document.querySelector('.fleche img').addEventListener('click', function() {
    window.scrollTo({
        left: window.innerWidth, // Défiler à droite de la largeur de l'écran
        behavior: 'smooth' // Défilement fluide
    });
});

const backButton = document.getElementById('backButton');

document.querySelector('.fleche img').addEventListener('click', function() {
    window.scrollTo({
        left: window.innerWidth, 
        behavior: 'smooth'
    });
    backButton.style.display = 'block'; // Affiche le bouton retour
});

backButton.addEventListener('click', function() {
    window.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
    backButton.style.display = 'none'; // Cache le bouton après retour
});
