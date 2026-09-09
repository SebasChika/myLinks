let gitHub = document.getElementById("gitHub");
let linkedIn = document.getElementById("linkedIn");
let youtube = document.getElementById("youTube");
let ig = document.getElementById("instagram");
ig.addEventListener("click", irIg);
youtube.addEventListener("click", youtubeIr);
linkedIn.addEventListener("click", linkedIr);
gitHub.addEventListener("click", gitHubIr);
let negro = document.getElementById("negro");

function gitHubIr() {
    setTimeout(() => {
        window.location.href = "https://github.com/SebasChika";
    }, 2000)

}

function irIg() {
    setTimeout(() => {
        window.location.href = "https://www.instagram.com/sebaschikaa/";
    }, 2000)

}

function youtubeIr() {
    setTimeout(() => {
        window.location.href = "https://www.youtube.com/@SebasChika";
    }, 2000)

}

function linkedIr() {
    setTimeout(() => {
        window.location.href = "https://www.linkedin.com/in/sebastian-alejandro-chica-arias-b40392386";
    }, 2000)

}

function iniciar() {
    negro.classList.add("aparecer");
}

function volverAparecer() {
    negro.classList.remove("desaparecer");
    negro.classList.add("aparecer");
}


window.addEventListener("load", iniciar);
window.addEventListener("pageshow", volverAparecer);
