const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPos = 20;
let minPos = 130;
let secPos = 267;

var date = new Date();

HOURHAND.style.transform = "rotate(" + date.getHours() + "deg)";
MINUTEHAND.style.transform = "rotate(" + date.getMinutes() + "deg)";
SECONDHAND.style.transform = "rotate(" + date.getSeconds() + "deg)";