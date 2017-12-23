const MineGame = function() {
  this.rightPath = generateRightPath(6);
  this.correctMove = -1;
  this.totalMove = 18;
  this.movesMade = [];
}

MineGame.prototype = {
  isRightMove: function(cellId) {
    return cellId == this.rightPath[this.correctMove];
  },
  isMoveAlreadyMade: function(cellId) {
    return this.movesMade.includes(cellId);
  },
  hasCrossedField: function(cellId) {
    let lastIndex = this.rightPath.length;
    return cellId == this.rightPath[lastIndex - 1];
  }
}

const chooseFirstMove = function(row) {
  return Math.floor(Math.random() * row) + 1;
}

const isLastColumn = function(cellId, row) {
  return cellId % row == 0;
}

const isFirstColumn = function(cellId, row) {
  return cellId % row == 1;
}

const giveMovesForMidOrFirstBox = function(cellId, row) {
  if (isFirstColumn(cellId, row)) {
    return [cellId + 1, cellId + row];
  }
  return [cellId - 1, cellId + 1, cellId + row];
}

const suggestNextMoves = function(cellId, row) {
  if (isLastColumn(cellId, row)) {
    return [cellId - 1, cellId + row];
  }
  return giveMovesForMidOrFirstBox(cellId, row);
}

const chooseNextRandomPath = function(cellId, row) {
  let requiredMove = suggestNextMoves(cellId, row);
  let length = requiredMove.length;
  let index = Math.floor(Math.random() * length);
  return requiredMove[index];
}

const isNotInLastMoveRange = function(cellId, row) {
  let secondLastMove = row * row - 2 * row;
  return cellId <= secondLastMove;
}

const makeFirstMove = function(row) {
  let rightPath = [];
  let firstMove = chooseFirstMove(row);
  rightPath.push(firstMove);
  return rightPath;
}


const makeSecondMove = function(rightPath, row) {
  let secondMove = rightPath[0] + row;
  rightPath.push(secondMove);
  return rightPath;
}

const makeFirstTwoMoves = function(row) {
  let rightPath = makeFirstMove(row);
  return makeSecondMove(rightPath, row);
}

const generateFreshPath = function(freshMove, lastMove, rightPath, row) {
  while (rightPath.includes(freshMove)) {
    freshMove = chooseNextRandomPath(lastMove, row);
  }
  return freshMove;
}

const generateRightPath = function(row) {
  let rightPath = makeFirstTwoMoves(row);
  let lastMove = rightPath[1];
  while (isNotInLastMoveRange(lastMove, row)) {
    let nextMove = chooseNextRandomPath(lastMove, row);
    let freshMove = generateFreshPath(nextMove, lastMove, rightPath, row);
    rightPath.push(freshMove);
    pathLength = rightPath.length - 1;
    lastMove = rightPath[pathLength];
  }
  rightPath.push(lastMove + row);
  return rightPath;
}

console.log(generateRightPath(6));
