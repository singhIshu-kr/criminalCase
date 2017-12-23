const mineGame = new MineGame();

const displayWrongMove = function(cellId) {
  let wrongCell = document.getElementById(cellId);
  wrongCell.style.backgroundColor = "red";
}

const displayRightMove = function(cellId) {
  let correctCell = document.getElementById(cellId);
  correctCell.style.backgroundColor = "green";
  rightChoice();
}

const rightChoice = function() {
  let audio = document.getElementById("rightChoice");
  audio.play();
}

const displayWinner = function() {
  let stageCompleted = document.getElementById("instructions");
  stageCompleted.innerHTML = "Stage Completed"
}

const displayGameOver = function() {
  let stageCompleted = document.getElementById("instructions");
  stageCompleted.innerHTML = "Game Over";
}

const stopGame = function() {
  let mineField = document.getElementById("mineField");
  mineField.onclick = null;
}

const declareWinOrContinue = function(cellId) {
  if (mineGame.hasCrossedField(cellId)) {
    displayWinner();
    stopGame();
    location = "../gamestatus/gamestatus.html";
  }
  mineGame.movesMade.push(cellId);
}

const showGameOverOrContinue = function() {
  if (mineGame.totalMove == 0) {
    displayGameOver();
    stopGame();
    location = "../reviewGame.html";
  }
  mineGame.totalMove--;
}

const checkAndDisplayRightMove = function(cellId) {
  if (mineGame.isRightMove(cellId)) {
    displayRightMove(cellId);
    declareWinOrContinue(cellId);
  } else {
    mineGame.correctMove--;
  }
}

const displayRightOrWrongMove = function(cellId) {
  if (mineGame.rightPath.includes(cellId)) {
    mineGame.correctMove++;
    checkAndDisplayRightMove(cellId);
  } else {
    displayWrongMove(cellId);
  }
}

const executeGame = function() {
  let id = event.target.id;
  if (mineGame.isMoveAlreadyMade(+id)) {
    return;
  }
  displayRightOrWrongMove(+id);
  showGameOverOrContinue();
}
