const START = document.querySelector('#start');
const STOP = document.querySelector('#stop');
const RESET = document.querySelector('#reset');

let startTime;
let totalMiliseconds = 0;

let MINUTES = document.querySelector('#minutes');
let SECONDS = document.querySelector('#seconds');
let MSECONDS = document.querySelector('#millisecond');
let timerInterval;
let milliseconds = 00;
let seconds = 00;
let minutes = 00;


START.addEventListener('click', function() {
    startTime = new Date();

    clearInterval(timerInterval);

    timerInterval = setInterval(startTimer, 10);
});

STOP.addEventListener('click', function() {
    clearInterval(timerInterval);

    totalMiliseconds += new Date() - startTime;
});

RESET.addEventListener('click', function() {
    clearInterval(timerInterval);

    totalMiliseconds = 0;

    renderTime(new Date(0));
});


function startTimer() {
    const deltaTime = new Date() - startTime;
    const deltaDate = new Date(totalMiliseconds + deltaTime)

    renderTime(deltaDate);
}

function renderTime(dateObject) {
    MSECONDS.innerHTML = dateObject.getMilliseconds().toString().padStart(2, '0');
    SECONDS.innerHTML = dateObject.getSeconds().toString().padStart(2, '0');
    MINUTES.innerHTML = dateObject.getMinutes().toString().padStart(2, '0');
}