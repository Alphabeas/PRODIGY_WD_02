let timerInterval;
let startTime;
let lapTimes = [];

function startStop() {
    if (!startTime) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById("startStopBtn").textContent = "Stop";
    } else {
        clearInterval(timerInterval);
        startTime = null;
        document.getElementById("startStopBtn").textContent = "Start";
    }
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    document.getElementById("timer").textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function lap() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    lapTimes.push(elapsedTime);
    const lapList = document.getElementById("lapList");
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTimes.length + ": " + formatTime(Math.floor(elapsedTime / 3600)) + ":" + formatTime(Math.floor((elapsedTime % 3600) / 60)) + ":" + formatTime(elapsedTime % 60);
    lapList.appendChild(lapItem);
}

function reset() {
    clearInterval(timerInterval);
    startTime = null;
    lapTimes = [];
    document.getElementById("timer").textContent = "00:00:00";
    document.getElementById("startStopBtn").textContent = "Start";
    document.getElementById("lapList").innerHTML = "";
}