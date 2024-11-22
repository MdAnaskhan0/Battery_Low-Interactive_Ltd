// Global Variables
var timer = 60;
var score = 0;

// Create Bubbles function
function makeBubble() {
  var bubbles = "";
  // Calculate the number of bubbles based on the screen width
  var totalBubbles =
    Math.floor(window.innerWidth / 60) * Math.floor(window.innerHeight / 50);

  for (var i = 1; i <= totalBubbles; i++) {
    var rnumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${rnumber}</div>`;
  }
  document.getElementById("pbottom").innerHTML = bubbles;
}

// Timer Function
function runTimer() {
  var timeInterval = setInterval(function () {
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
      document.getElementById("pbottom").innerHTML = "Game Over";
    }
  }, 1000);
}

// Get new target
function getNewTarget() {
  var rnumber = Math.floor(Math.random() * 10);
  document.getElementById("target").innerHTML = rnumber;
}

// Score Function
function increaseScore() {
  score += 10;
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
  }
});

// Call functions
runTimer();
makeBubble();
getNewTarget();

// Recreate bubbles on window resize
window.addEventListener("resize", makeBubble);
