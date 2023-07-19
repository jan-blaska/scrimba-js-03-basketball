let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");

let scoreHomeTeam = 0;
let scoreGuestTeam = 0;

function homeAddOne() {
    scoreHomeTeam += 1;
    scoreHomeEl.textContent = scoreHomeTeam;
}

function homeAddTwo() {
    scoreHomeTeam += 2;
    scoreHomeEl.textContent = scoreHomeTeam;
}

function homeAddThree() {
    scoreHomeTeam += 3;
    scoreHomeEl.textContent = scoreHomeTeam;
}

function guestAddOne() {
    scoreGuestTeam += 1;
    scoreGuestEl.textContent = scoreGuestTeam;
}

function guestAddTwo() {
    scoreGuestTeam += 2;
    scoreGuestEl.textContent = scoreGuestTeam;
}

function guestAddThree() {
    scoreGuestTeam += 3;
    scoreGuestEl.textContent = scoreGuestTeam;
}

