function showSpaceQuiz() {
    const quizModal = new bootstrap.Modal(document.getElementById('spaceQuizModal'));
    quizModal.show();
}

function openPlanetInfo(planet) {
    const modalId = `${planet}Modal`;
    const myModal = new bootstrap.Modal(document.getElementById(modalId));
    myModal.show();
}

function movePlanet(planet, speed, distanceFromSun) {
    const sun = document.querySelector('.sol');
    let angle = 0;

    setInterval(() => {
        angle += speed;
        const x = Math.cos(angle) * distanceFromSun;
        const y = Math.sin(angle) * distanceFromSun;
        planet.style.transform = `translate(${x}px, ${y}px)`;
    }, 50);
}

const mercury = document.querySelector('.mercury');
const venus = document.querySelector('.venus');
const earth = document.querySelector('.earth');
const mars = document.querySelector('.mars');
const jupiter = document.querySelector('.jupiter');
const saturn = document.querySelector('.saturn');

movePlanet(mercury, 0.02, 100);
movePlanet(venus, 0.01, 150);
movePlanet(earth, 0.008, 200);
movePlanet(mars, 0.006, 250);
movePlanet(jupiter, 0.004, 300);
movePlanet(saturn, 0.003, 350);

function showCardContainer() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.classList.add('show-card-container');
}

document.addEventListener("DOMContentLoaded", showCardContainer);
function showSpaceQuiz() {
    document.getElementById("spaceQuiz").style.display = "block";
}

function checkQuizAnswers() {
    const correctAnswers = {
        question1: "option4",
    };

    const userAnswers = {};
    const question1Options = document.getElementsByName("question1");
    for (let i = 0; i < question1Options.length; i++) {
        if (question1Options[i].checked) {
            userAnswers.question1 = question1Options[i].value;
            break;
        }
    }

    let score = 0;
    if (userAnswers.question1 === correctAnswers.question1) {
        score += 1;
        const animationSuccess = document.getElementById("animation-success");
        animationSuccess.style.display = "block";
        animationSuccess.classList.add("fade-in-animation");

        // Ocultar o feedback após 2 segundos (2000 milissegundos)
        setTimeout(function () {
            animationSuccess.style.display = "none";
        }, 2000);
    }

    const quizFeedback = document.getElementById("quiz-feedback");
    quizFeedback.innerHTML = score === 1 ? " 🎉🎉 Parabéns! Você acertou a pergunta! 🎉🎉" : "😕 Ops! Você errou a pergunta. Tente novamente!";

    const bodyElement = document.body;
    if (userAnswers.question1 === correctAnswers.question1) {
        bodyElement.classList.add('correct-answer');
    } else {
        bodyElement.classList.remove('correct-answer');
    }
}
//movimenta o et
window.addEventListener('scroll', function () {
    const element = document.querySelector('.wiggle-on-hover');
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const newPosition = (window.innerWidth - element.clientWidth) * scrollPercentage;
    element.style.right = newPosition + 'px';
});