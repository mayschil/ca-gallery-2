'use strict'


var gBoard;
var gDimension;
var gTimer;
var gCountBombs ;
var currTime = 0;
var gRightClick;
var gChecks=0;
var gCountOfEmptySpace;

window.oncontextmenu = function () {

    gRightClick = false;
    return gRightClick;

}
// chooseLevel(elLevel);
// restartGame();

// CR: Better solution is just to have a gLevel array and pass the index of the wanted level.
function chooseLevel(elLevel) {

    document.querySelector('table').style.display = 'block';
    document.querySelector('.timer').style.display = 'block';

    if (elLevel.innerHTML === 'Beginner') {
        gCountBombs = 0;
        gDimension = 4;
        restartGame();
    }
    if (elLevel.innerHTML === 'Medium') {
        gCountBombs = 0;
        gDimension = 6;
        restartGame();
    }
    if (elLevel.innerHTML === 'Expert') {
        gCountBombs = 0;
        gDimension = 8;
        restartGame()
    }

}
// CR: written twice for no reason:
// gBoard = buildBoard();
// var negsCount = setMinesNegsCount();
// renderBoard(negsCount, '.gameBoard');
function restartGame() {

    document.querySelector('h1').innerHTML = 'Minesweeper';

    var eltime = document.querySelector('.seconds');
    eltime.innerHTML = '';
    document.querySelector('.bombs').innerHTML = '';
    gBoard = buildBoard();
    var negsCount = setMinesNegsCount();
    renderBoard(negsCount, '.gameBoard');
}

function startTime() {

    var eltime = document.querySelector('.seconds');
    currTime += 1;
    eltime.innerHTML = currTime;
}

function buildBoard() {
    var board = [];
    for (var i = 0; i < gDimension; i++) {
        board[i] = [];
        for (var j = 0; j < gDimension; j++) {
            board[i][j] = '';
            var rand = Math.random();
            if (rand > 0.85) {
                board[i][j] = '💣';
                gCountBombs++;
            }
        }
    }
    document.querySelector('.bomb-count').style.display = 'block';
    document.querySelector('.bombs').innerHTML = gCountBombs;
    return board;
}

function rightClick(elCell) {
   console.log('gCountBombs',gCountBombs)
    // elCell.classList.add('maybeleBomb');
    // elCell.innerText = '🏴';
    elCell.innerHTML = '<i class="fa fa-flag-o" aria-hidden="true"></i>'
    if (elCell.classList.contains('markBomb')) {
        gChecks++;
        document.querySelector('.bombs').innerHTML = gCountBombs-gChecks;
        checkGameOver();
    } 
       
}

// CR: Based on your model. the id cell-bomb is not necessery
function renderBoard(board, selector) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var mark = 'mark' + board[i][j];
            var cellId = '-' + i + '-' + j;;
            if (gBoard[i][j] === '💣') {
                strHtml += '<td id="cell-bomb' + cellId + '" class="markBomb"  onclick="cellClicked(this)" oncontextmenu="rightClick(this)" on></td>';
                gBoard[i][j] = ({ symbol: 'bomb', i: i, j: j, cellMarked: 0 });
            }
            else {
                strHtml += '<td  id="cell-' + board[i][j] + cellId + '"  class="' + mark + '"  onclick="cellClicked(this)" oncontextmenu="rightClick(this)"></td>';
                gBoard[i][j] = ({ symbol: board[i][j], i: i, j: j, cellMarked: 0 });
            }
        }
        strHtml += '</tr>';
    }
    var elMat = document.querySelector(selector);
    elMat.innerHTML = strHtml;
}

function setMinesNegsCount() {

    var negsCountBoard = [];
    var negsCount = 0;
    for (var i = 0; i < gBoard.length; i++) {
        var row = gBoard[i];
        negsCountBoard.push([]);
        for (var j = 0; j < gBoard.length; j++) {
            var negsCount = countNegs(i, j);
            negsCountBoard[i][j] = negsCount;
        }
    }
    // console.log('setMinesNegsCount', negsCountBoard)
    return negsCountBoard;
}
// CR: To much spacing, confusingץ
function countNegs(cellI, cellJ) {
    var count = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= gBoard[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (gBoard[i][j] === '💣') count++;
        }
    }
    return count;
}


function cellClicked(elCell) {

    if (!gTimer) gTimer = setInterval(startTime, 1000);

    elCell.classList.add('marked');

    var id = getCellCoord(elCell.id)

    //if the char is a bomb -all the bombs reveal and game over 
    if (id.cellSymbol === 'bomb') {
        bombMark();
        return;
    }
    else {
        if (+id.cellSymbol > 0) {
            elCell.innerText = id.cellSymbol;
            gBoard[id.i][id.j].cellMarked = 1;
        }
        else {
            if (+id.cellSymbol === 0) {
                gBoard[id.i][id.j].cellMarked = 1;
                zeroMark(id.i, id.j);
            }
        }
    }
    checkGameOver();
}

function checkGameOver() {
    console.log('im hereeeee')
    console.log(gChecks,gCountBombs)
    var k = 0;
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {
            if (gBoard[i][j].cellMarked) k++
        }
    }
    if (gChecks === gCountBombs && (gChecks + k === gBoard.length*gBoard.length)) {
        console.log(gChecks,gCountBombs)
        gameOver();
    }
    
return;    
}

function maybeBomb(elCell) {
    elCell.classList.add('.maybeBomb');
}


// CR: Writte twice for no reason. 
// var elZeroCell = document.querySelector('#cell-' + gBoard[i][j].symbol + '-' + i + '-' + j);
// elZeroCell.classList.add('marked');
// gBoard[i][j].cellMarked=1;

function zeroMark(idi, idj) {

    for (var i = (+idi - 2); i <= (+idi + 2); i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = (+idj - 2); j <= (+idj + 2); j++) {
            if (j < 0 || j >= gBoard.length) continue;
            if (i === +idi && j === +idj) continue;
            if (gBoard[i][j].symbol !== 'bomb' && +gBoard[i][j].symbol !== 0) {
                var elZeroCell = document.querySelector('#cell-' + gBoard[i][j].symbol + '-' + i + '-' + j);
                elZeroCell.innerText = gBoard[i][j].symbol;
                elZeroCell.classList.add('marked');
                gBoard[i][j].cellMarked = 1;
            }
            if (gBoard[i][j].symbol === 0) {
                var elZeroCell = document.querySelector('#cell-' + gBoard[i][j].symbol + '-' + i + '-' + j);
                elZeroCell.classList.add('marked');
                gBoard[i][j].cellMarked = 1;


            }
        }
    }

}

// CR: better to have a class for bombs. 
// Avoid excessive HTML inside JS 
function bombMark() {

    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {
            if (gBoard[i][j].symbol === 'bomb') {
                var elOtherCell = document.querySelector('#cell-bomb-' + i + '-' + j);
                elOtherCell.innerText = '💣';
            }
        }
    }

    gameOver();
}

function getCellCoord(cellId) {

    var arrId = cellId.split('-');
    var coord = { cellSymbol: arrId[1], i: arrId[2], j: arrId[3] };
    return coord;
}

function gameOver() {

    var elHead = document.querySelector('h1');
    elHead.innerText = 'GAME OVER!!!'
    clearInterval(gTimer);
    gTimer = null;
    currTime = 0;
    return;
}


