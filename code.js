function toggleAnswer(id) {
    let answer = document.getElementById(id);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
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