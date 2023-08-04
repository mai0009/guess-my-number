// Define variables
let secretNumber, score, hiScore;
const message = document.querySelector("h4");
const scoreSpan = document.querySelector(".score-span");
const hiScoreSpan = document.querySelector(".hi-score-span");
const checkBtn = document.querySelector(".check-btn");
const resetBtn = document.querySelector(".again");

// Start the game
function startGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  hiScore = Number(hiScoreSpan.textContent);
  scoreSpan.textContent = score;
  message.textContent = "Start Guessing...❓";
  document.querySelector(".secret-number").textContent = "❓";
  document.querySelector(".secret-number").style.width = "50px";
  document.querySelector("body").style.backgroundColor = "#222";
}

// Check the user's guess
function checkGuess() {
  const myGuess = Number(document.querySelector("input").value);
  if (!myGuess) {
    message.textContent = "⛔ No Number!";
  } else if (myGuess === secretNumber) {
    message.textContent = "🎉 You are Right!";
    if (score > hiScore) {
      hiScore = score;
      hiScoreSpan.textContent = hiScore;
    }
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".secret-number").textContent = secretNumber;
    document.querySelector(".secret-number").style.width = "100px";
  } else {
    const messageText = myGuess > secretNumber ? "👆 Too High!" : "👇 Too Low!";
    message.textContent = messageText;
    if (score > 1) {
      score--;
      scoreSpan.textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      scoreSpan.textContent = 0;
    }
  }
  document.querySelector("input").value = "";
}

// Event listeners
checkBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", startGame);

// Start the game
startGame();
