// Global Variables
let timer = 10;
let score = 0;

// Create Bubbles function
function makeBubble() {
  let bubbles = "";
  // Calculate the number of bubbles based on the screen width
  let totalBubbles =
    Math.floor(window.innerWidth / 60) * Math.floor(window.innerHeight / 50);

  for (let i = 1; i <= totalBubbles; i++) {
    let rnumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${rnumber}</div>`;
  }
  document.getElementById("pbottom").innerHTML = bubbles;
}

// Timer Function
function runTimer() {
  let timeInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timer").innerHTML = timer;
    } else {
      clearInterval(timeInterval);
      document.getElementById("pbottom").innerHTML = "";
      document.getElementById("target").innerHTML = "";
      document.getElementById("timer").innerHTML = "";
      document.getElementById("score").innerHTML = "";
      document.getElementById("pbottom").classList.add("game-over");
      document.getElementById("pbottom").innerHTML =
        "Game Over <br> You Scored: " + score + " points";
    }
  }, 1000);
}

// Get new target
function getNewTarget() {
  let rnumber = Math.floor(Math.random() * 10);
  document.getElementById("target").innerHTML = rnumber;
}

// Score Function
function increaseScore() {
  score += 1;
  document.getElementById("score").innerHTML = score;
}

// Decrease Score Function
function decreaseScore() {
  score -= 1;
  document.getElementById("score").innerHTML = score;
}

// Bubble Click Function
document.getElementById("pbottom").addEventListener("click", function (e) {
  if (e.target.classList.contains("bubble")) {
    if (e.target.innerHTML == document.getElementById("target").innerHTML) {
      increaseScore();
      makeBubble();
      getNewTarget();
    }
    else {
      decreaseScore();
      makeBubble();
      getNewTarget();
    }
  }
});

// Call functions
runTimer();
makeBubble();
getNewTarget();

// Recreate bubbles on window resize
window.addEventListener("resize", makeBubble);


