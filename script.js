let box = document.querySelector("#circle");
let time = document.querySelector(".timer");
let check = document.querySelector(".checker");
let score = document.querySelector(".scorer");

let time1 = 59;
let score1 = 0;

// Start the timer
let timerInterval = setInterval(function () {
    if (time1 >= 0) {
        time.innerHTML = time1;
        time1--;
    } else {
        alert("TIME OVER PLEASE RESTART!");
        clearInterval(timerInterval); // Stop the timer
    }
}, 1000);


box.addEventListener("click", function (e) {
    if (e.target.innerHTML == check.innerHTML) {
        checkHandler();
        scoreHandler();
        circleHandler(); // Generate new numbers on click
    }
});

function scoreHandler() {
    score1 += 10;
    score.innerHTML = score1;
}

function checkHandler() {
    check.innerHTML = Math.floor(Math.random() * 10);
}

function circleHandler() {
    box.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        box.innerHTML += `<div class="box1">${Math.floor(Math.random() * 10)}</div>`;
    }
}

// Initialize the game
circleHandler();
checkHandler();
