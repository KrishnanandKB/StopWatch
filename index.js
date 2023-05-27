const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startButton");
const pauseBtn = document.getElementById("pauseButton");
const resetBtn = document.getElementById("reserButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime =0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
