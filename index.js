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

startBtn.addEventListener("click",() =>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,100)
    }
});
resetBtn.addEventListener("click",() =>{
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
         
    }
} );
pauseBtn.addEventListener();

function updateTime(){

    elapsedTime = Date.now()- startTime;

    secs = Math.floor((elapsedTime/1000)% 60);
    mins = Math.floor((elapsedTime/(1000* 60))% 60);
    hrs = Math.floor((elapsedTime/(1000* 60*60))% 60); 

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad (hrs);
     
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2?unit : "0" +unit;
     }
}