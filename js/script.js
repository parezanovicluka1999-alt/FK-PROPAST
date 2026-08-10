function toggleMenu() {
    const nav = document.getElementById("main-nav");
    nav.classList.toggle("active");
}

function promeniTekst() {
    alert("Dobrodošao na sajt FK Propast!");
}

const countdown = document.getElementById("countdown");

function odbrojavanje() {

const datumUtakmice = new Date("August 15, 2026 18:00:00");

const sada = new Date();

const razlika = datumUtakmice - sada;

const dani = Math.floor(razlika / (1000 * 60 * 60 * 24));

const sati = Math.floor((razlika / (1000 * 60 * 60)) % 24);

const minuti = Math.floor((razlika / (1000 * 60)) % 60);

const sekunde = Math.floor((razlika / 1000) % 60);

countdown.innerHTML = dani + " dana | " + sati + " sati | " + minuti + " minuta | " + sekunde + " sekundi";
}

odbrojavanje();

setInterval(odbrojavanje, 1000);