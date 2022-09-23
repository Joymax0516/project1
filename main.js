/*----- cached element references -----*/
var mouseLists = document.querySelectorAll('.mouse');
var bombLists = document.querySelectorAll('.bomb');
var scoreBox = document.querySelector(".score");
var resetBtnEl = document.getElementById('btn reset');
var timeBoxEl = document.querySelector('.time');
var startBoxEl = document.getElementById('btn start');
var winEl = document.getElementById("win");
var loseEl = document.getElementById("lose");
var cryEl = document.getElementById("cry");
var smileEl = document.getElementById("smile");

/*-----app's state (variables) ---*/
var score = 0;
var mouseID;
var timeID;
var bombID
var time = 45;
var cryID, smileID;

/*----- event listeners -----*/
resetBtnEl.addEventListener('click', handleResetClick);
startBoxEl.addEventListener('click', handleStartClick);

/*----- functions -----*/



function init() {
  clearInterval(timeID);
  clearInterval(mouseID);
  clearInterval(bombID);
  clearResult();
  score = 0;
  scoreBox.innerHTML = score;
  timeBoxEl.innerHTML = 45;
}


function handleStartClick() {
  if (resetBtnEl.onclick) {
    clearInterval(timeID);
    clearInterval(mouseID);
    clearInterval(bombID);
    clearResult();
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
    this.nextElementSibling.style.display = "block";
    var _that = this;
    score += 100;
    var timer = setTimeout(function(){
      clearTimeout(timer);
      timer = null;
      _that.nextElementSibling.style.display = "none";
    }, 260)
    scoreBox.innerHTML = score;
  }
};


for (var i = 0; i < mouseLists.length; i++) {
  bombLists[i].onclick = function() {
    this.style.display = "none";
    this.nextElementSibling.style.display = "block";
    var _that = this;
    score -= 200;
    var timer = setTimeout(function(){
      clearTimeout(timer);
      timer = null;
      _that.nextElementSibling.style.display = "none";
    }, 260)
    scoreBox.innerHTML = score;
  }
};



function startGame(){
  mouseID = setInterval(function() {
    var i = Math.floor(Math.random()* 9);
    mouseLists[i].style.display = "block";
    setTimeout(function() {
      mouseLists[i].style.display = "none";
    },900);
  }, 500);

  bombID = setInterval(function() {
    var i = Math.floor(Math.random() * 9);
    bombLists[i].style.display = "block";
    setTimeout(function() {
      bombLists[i].style.display = "none";
    },1000);
  },5000);

  timeID = setInterval(function(){
    time--;
    timeBoxEl.innerHTML = time;
    if (time === 0) {
      clearInterval(timeID);
      clearInterval(mouseID);
      clearInterval(bombID);
      checkWin();
    }
    timeBoxEl.innerHTML = time;
  },1000);
}



function checkWin(){
  if (scoreBox.innerHTML > 1500){
    winEl.style.display = "block";
    cryID = setInterval(function() {
      cryEl.style.display = "block";
    },2500)
  } else {
    loseEl.style.display = "block";
    smileID = setInterval(function() {
      smileEl.style.display = "block";
    },2500)
  }
}

function clearResult(){
  clearInterval(smileID);
  clearInterval(cryID);
  winEl.style.display = "none";
  cryEl.style.display = "none";
  loseEl.style.display = "none";
  smileEl.style.display = "none";
}












