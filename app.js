const container = document.querySelector('#container');

//Button
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop');

//sVg

// const svgElement = document.querySelector('.svg')

//Element
const minuteElement = document.getElementById('minute');

// const start = 1;
let time = 59;
let timerID;

//START

startBtn.onclick = function() {
  console.log(startBtn);
  timerID = setInterval(function () {
    const minute = time-- ;
    minuteElement.innerText = minute;
    if([minute].every(element => element <= 0)){
       clearInterval(timerID)
    }
  }, 1000)
};

//STOP

stopBtn.onclick = function() {
  console.log(stopBtn);
  const minute = 0;
  minuteElement.innerText = minute;
  clearInterval(timerID)
};

//SVG

const svgElement = document.querySelector('.svg')

function newSvg() {
  svgElement.stule.transform='rotate('+startBtn.innerText + 'deg)'
};