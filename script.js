const buttonStart = document.querySelector('#button-start');
const buttonPause = document.querySelector('#button-pause');
const buttonReset = document.querySelector('#button-reset');

const textHour = document.querySelector('#text-hour');
const textMinute = document.querySelector('#text-minute');
const textSecond = document.querySelector('#text-second');
const textMillisecond = document.querySelector('#text-millisecond');

let interval;
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

render();

function update() {
    millisecond += 10;
    if (millisecond >= 1000) {
        millisecond = 0;
        second++;
    }
    if (second >= 60) {
        second = 0;
        minute++;
    }
    if (minute >= 60) {
        minute = 0;
        hour++;
    }
    render();
}

function render() {
    textHour.innerHTML = format(hour);
    textMinute.innerHTML = format(minute);
    textSecond.innerHTML = format(second);
    textMillisecond.innerHTML = format(millisecond, 3);
};

function start() {
    clearInterval(interval);
    interval = setInterval(update, 10);
};

function pause() {
    clearInterval(interval);
};

function reset() {
    clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    render();
};

function format(number, length = 2) {
    return number.toString().padStart(length, '0');
};

buttonStart.addEventListener('click', () => {
    start();
});

buttonPause.addEventListener('click', () => {
    pause();
});

buttonReset.addEventListener('click', () => {
    reset();
});