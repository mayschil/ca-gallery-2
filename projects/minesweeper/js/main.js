'use strict'
console.log('hiiiiiiiiiiiiiiii')
var gBoard;
var gDimension = 8;
var gTimer;
var gCountBombs = 0;
var currTime = 0;
var gRightClick;
var count;
var gCountOfEmptySpace;

window.oncontextmenu = function () {

    gRightClick = false;
    return gRightClick;

}
// chooseLevel(elLevel);
// restartGame();

// CR: Better solution is just to have a gLevel array and pass the index of the wanted level.
function chooseLevel(elLevel) {
    
    if (elLevel.innerHTML === 'Beginner') {
        gDimension = 4;
        restartGame();
    }
    if (elLevel.innerHTML === 'Medium') {
        gDimension = 6;
        restartGame();
    }
    if (elLevel.innerHTML === 'Expert') {
        gDimension = 8;
        restartGame()
    }

}
// CR: written twice for no reason:
// gBoard = buildBoard();
// var negsCount = setMinesNegsCount();
// renderBoard(negsCount, '.gameBoard');
function restartGame() {
    // console.log()
    // if (gTimer) {
    //     clearInterval(gTimer);
    //     gTimer = null;
    //     gCountBombs = 0;
    //     currTime=0;
    //     gBoard = buildBoard();
    //     var negsCount = setMinesNegsCount();
    //     renderBoard(negsCount, '.gameBoard');
    //     var elHead = document.querySelector('h1');
    //     elHead.innerText = 'Minesweeper';
    // }
    // else 
    {

      
        
        gBoard = buildBoard();
        var negsCount = setMinesNegsCount();
        renderBoard(negsCount, '.gameBoard');
    }
}

function startTime() {

    var eltime = document.querySelector('.timer');
    currTime += 1;
    eltime.innerHTML = 'TIME PASSED: ' + currTime + ' seconds';
}

function buildBoard() {
    var board = [];
    for (var i = 0; i < gDimension; i++) {
        board[i] = [];
        for (var j = 0; j < gDimension; j++) {
            board[i][j] = '';
            var rand = Math.random();
            if (rand > 0.9) {
                board[i][j] = '💣';
                gCountBombs++;
            }
        }
    }
    return board;
}

function rightClick(elCell) {

    // elCell.classList.add('maybeleBomb');
    elCell.innerText = '🏴';
    count++;
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
    var k = 0;
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {
            if (gBoard[i][j].cellMarked) k++
        }
    }

    if (count === gCountBombs && (k + gCountBombs === gDimension * gDimension)) {
        gameOver();
        return;
    }

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
    currTime=0;
    console.log('gTimer',gTimer)
    console.log('currTime',currTime)
    var eltime = document.querySelector('.timer');
    eltime.innerHTML = '';
    return;
}


