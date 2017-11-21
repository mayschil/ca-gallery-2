'use strict';

var WALL = '#';
var FOOD = '.';
var EMPTY = ' ';
var SUPERFOOD='@';
var gBoard;
var gState = {
  score: 0,
  isGameDone: false
};

function init() {
  gBoard = buildBoard();
  printMat(gBoard, '.boardContainer');
  console.table(gBoard);
}

function playAgain(){
  init();
  gState.score=0;
  gState.isGameDone=false;
  var elModal = document.querySelector('.game-over')
  elModal.style.display = 'none';
  console.log('1'); 
}

function buildBoard() {
  var SIZE = 10;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD;
      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j == 3 && i > 4 && i < SIZE - 2)) {
        board[i][j] = WALL;
      }
    }
  }
  board[1][1]=SUPERFOOD;
  board[8][1]=SUPERFOOD;
  board[1][8]=SUPERFOOD;
  board[8][8]=SUPERFOOD;

  createPacman(board);
 createGhosts(board);
  return board;
}

// This function is called from both pacman and ghost to check engage
function checkEngage(cell, opponent) {
  if (cell === opponent) {
    // TODO: basic support for eating power-ball (which is not in the game yet)
    if (gPacman.isSuper) {
      // gBoard[gPacman.i][gPacman.j]=EMPTY;
      console.log(gPacman.location.i,gPacman.location.j);
      gGhosts = gGhosts.filter(function (ghost) {
        return (ghost.location.i !== gPacman.location.i && ghost.location.j !== gPacman.location.j);
    });
      console.log('Ghost is dead');
      if(gGhosts.length<3) createGhost(gBoard);
    } else {
      // clearInterval(gIntervalGhosts);
      gState.isGameDone = true;
      // TODO: GameOver popup with a play again button
      // alert('Game Over!');
      var elModal = document.querySelector('.game-over')
      elModal.style.display = 'block';
      console.log('2'); 
      return true;
    }
  }
  return false;
}


// this function updates both the model and the dom for the score
function updateScore(value) {
  gState.score += value;
  console.log('gState.score',gState.score)
  document.querySelector('header > h3 > span').innerText = gState.score;
  if(gState.score===56) {
    console.log('3'); 
    var elModal = document.querySelector('.game-over')
    elModal.style.display = 'block';
  }
}

function renderCell(location, value, ghostColor) {
  var cellSelector = '.cell' + location.i + '-' + location.j;
  var elCell = document.querySelector(cellSelector);
  elCell.innerHTML = value;
  if(value===GHOST) elCell.style.color=ghostColor;
  if(value===FOOD) elCell.style.color='white';
  if(value===SUPERFOOD) elCell.style.color='white';
}

