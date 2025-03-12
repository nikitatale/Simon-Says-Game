let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
     if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
     }

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250)
}


function levelUp(){
    userSeq = [];
     level++;
     h2.innerText = `Level ${level}`;

   
  let randInd = Math.floor(Math.random() * 3);
  let randColor = btns[randInd];
  let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns (index) {
    // console.log("current level", level);

    // let index = level-1;

    if(userSeq[index] == gameSeq[index]){
      if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
      }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "#011F3F";
        });
        reset();
    }
}

function btnPress() {
   
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
}


let allBtns  = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
started = false;
gameSeq = [];
userSeq = [];
level = 0;
}



const bgMusicRed = document.getElementById('bgMusicRed');
function startMusic() {
    
    if (bgMusicRed.paused) {
        bgMusicRed.play();
        console.log("Music started!");
    }
}

document.body.addEventListener('click', startMusic);

const startButton = document.getElementById('startButton');
if (startButton) {
    startButton.addEventListener('click', startMusic);
}






