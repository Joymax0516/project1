/*----- cached element references -----*/
var mouseLists = document.querySelectorAll('.mouse');
var miceCount = Math.floor(Math.random() * 4) + 1;
var scoreBox = document.querySelector(".score");
var resetBtnEl = document.getElementById('btn reset');
var timeBoxEl = document.querySelector('.time');
var startBoxEl = document.getElementById('btn start');
/*----- event listeners -----*/

resetBtnEl.addEventListener('click', handleResetClick);
startBoxEl.addEventListener('click', handleStartClick);


/*----- functions -----*/

var score = 0;
function init() {
  clearInterval(timeID);
  clearInterval(mouseID);
  score = 0;
  scoreBox.innerHTML = score;
  timeBoxEl.innerHTML = 45;
}


function handleStartClick() {
  if (resetBtnEl.onclick) {
    clearInterval(timeID);
    clearInterval(mouseID);
    scoreBox.innerHTML = 0;
    timeBoxEl.innerHTML = 45;
  } else {
  startGame();
  }
}



function handleResetClick() {
  init();
}



for (var i = 0; i < mouseLists.length; i++) {
  mouseLists[i].onclick = function() {
    this.style.display = "none";
    this.parentElement.lastElementChild.style.display = "block";
    var _that = this;
    score += 100;
    var timer = setTimeout(function(){
      clearTimeout(timer);
      timer = null;
      _that.parentElement.lastElementChild.style.display = "none";
    }, 260)
    scoreBox.innerHTML = score;
  }
};



var mouseID;
var timeID;


function startGame(){

  mouseID = setInterval(function() {
    var i = Math.floor(Math.random()* 9);
    mouseLists[i].style.display = "block";
    setTimeout(function() {
      mouseLists[i].style.display = "none";
    },900);
  }, 500);

  //clock
  var time = 45;
  timeID = setInterval(function(){
    time--;
    timeBoxEl.innerHTML = time;
    if (time === 0) {
      clearInterval(timeID);
      clearInterval(mouseID);
      alert("Time is out!");
    }
  },1000);
}





function randomMice() {
  miceIdx = [];
  for (var i = 0; i < 5; ) {
    var a = Math.floor(Math.random() * 9);
    var boo = true;
    for (var j = 0; j < i; j++) {
      if (miceIdx[j] === a) {
        boo = false;
      }
    }
    if (boo) {
      miceIdx[i] === a;
      i++;
      miceIdx.push(a);
    }
  }
}


