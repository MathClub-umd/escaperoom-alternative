let timerInterval;
function enterEscapeRoom() {
  window.location.href = "escape-room.html";
}

window.onload = function() {
  startTimer();
}

function startTimer() {
  let timeLeft = 2 * 60 * 60;
  const timerDisplay = document.getElementById('timer');
  
  timerInterval = setInterval(function() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent = `Time remaining: ${formatTime(minutes)}:${formatTime(seconds)}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.body.innerHTML = `<img src='badimage.png' class='full-screen'>`;
    }
  }, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function checkCombination() {
  const correctCombination = ["8", "8", "0", "7", "9"];
  const inputs = [
    document.getElementById("input1"),
    document.getElementById("input2"),
    document.getElementById("input3"),
    document.getElementById("input4"),
    document.getElementById("input5")
  ];

  const userCombination = inputs.map(input => input.value);

  if (userCombination.join("") === correctCombination.join("")) {
    document.body.innerHTML = `<img src='goodimage.png' class='full-screen'>`;
    playSuccessSound();
  } else {
    alert("❌ Incorrect! Try again.");
  }
}

function playSuccessSound() {
  const audio = new Audio('assets/success.mp3');
  audio.play();
}
