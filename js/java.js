let gitHub = document.getElementById("gitHub");
let linkedIn = document.getElementById("linkedIn");
let youtube = document.getElementById("youTube");
let ig = document.getElementById("instagram");
let negro = document.getElementById("negro");

ig.addEventListener("click", irIg);
youtube.addEventListener("click", youtubeIr);
linkedIn.addEventListener("click", linkedIr);
gitHub.addEventListener("click", gitHubIr);

function gitHubIr() {
    negro.classList.remove("aparecer");
    negro.classList.add("desaparecer");
    // Guardamos en el navegador que el usuario salió a una red social
    localStorage.setItem("usuarioSalió", "true"); 
    setTimeout(() => {
        window.location.href = "https://github.com/SebasChika";
    }, 2000);
}

function irIg() {
    negro.classList.remove("aparecer");
    negro.classList.add("desaparecer");
    localStorage.setItem("usuarioSalió", "true");
    setTimeout(() => {
        window.location.href = "https://www.instagram.com/sebaschikaa/";
    }, 2000);
}

function youtubeIr() {
    negro.classList.remove("aparecer");
    negro.classList.add("desaparecer");
    localStorage.setItem("usuarioSalió", "true");
    setTimeout(() => {
        window.location.href = "https://www.youtube.com/@SebasChika";
    }, 2000);
}

function linkedIr() {
    negro.classList.remove("aparecer");
    negro.classList.add("desaparecer");
    localStorage.setItem("usuarioSalió", "true");
    setTimeout(() => {
        window.location.href = "https://www.linkedin.com/in/sebastian-alejandro-chica-arias-b40392386";
    }, 2000);
}

function iniciar() {
    if (localStorage.getItem("usuarioSalió") === "true") {
        volverAparecer();
        localStorage.removeItem("usuarioSalió"); 
    } else {
        negro.classList.add("aparecer");
    }
}

function volverAparecer() {
    negro.classList.remove("desaparecer");
    negro.classList.add("aparecer");
}

window.addEventListener("load", iniciar);

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && localStorage.getItem("usuarioSalió") === "true") {
        volverAparecer();
        localStorage.removeItem("usuarioSalió");
    }
});
