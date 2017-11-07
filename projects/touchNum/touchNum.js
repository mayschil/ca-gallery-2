
var gCount = 1;
var gTimePassed = 0;
var gNums = [];
var gDimension;
var gTimeInterval;

function chooseDiff(elLevel) {

    if(gTimeInterval || gTimeInterval === null ) cleanData();
         
    
    if (elLevel.innerHTML === 'Easy') {
        gDimension = 4;
        creatMat();
        creatBoard();
    }
    if (elLevel.innerHTML === 'Medium') {
        gDimension = 5;
        creatMat();
        creatBoard();
    }
    if (elLevel.innerHTML === 'Difficult') {
        gDimension = 6;
        creatMat();
        creatBoard();
    }

}

function cleanData(){

    clearInterval(gTimeInterval);
    var elhead = document.querySelector('h1');
    elhead.innerText = 'New Game!!!';
    gTimeInterval = null;
    var eltime = document.querySelector('#time');
    eltime.innerHTML = 'TIME PASSED: ' + 0;
    gCount=1;
}

function creatMat() {
    for (var i = 0; i < (gDimension) * (gDimension); i++) {
        gNums[i] = i + 1;
    }
}

function creatBoard() {

    var strHtml = ''
    for (var i = 0; i < gDimension; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < gDimension; j++) {
            var numRand = Math.floor((Math.random() * gNums.length) + 0);
            var num = gNums.splice(numRand, 1);
            strHtml += '<td > <div class="nums num1" onclick="cellClicked(this)"> ' + num + ' </div>'
            strHtml += '</td>'
        }
        strHtml += '</tr>';
    }
    var elBoard = document.querySelector('#board');
    console.log(elBoard);
    elBoard.innerHTML = strHtml;

}

function cellClicked(elNum) {
    if(elNum.classList !== 'numClicked')  elNum.classList.remove('numClicked');
    if (!gTimeInterval) gTimeInterval = setInterval(runTime, 100);
    if (+elNum.innerHTML !== gCount){
        var elHead = document.querySelector('h1');
        elHead.innerText = 'Not The Right Card!'
    }
     if(+elNum.innerHTML === gCount) {
        elNum.classList.add('numClicked');
        if(gCount === (gDimension) * (gDimension)) stopGame();
        else {
            elHead = document.querySelector('h1');
            elHead.innerText = 'Doing Good'
            gCount++;            
        }
     }
}

function runTime() {

    var eltime = document.querySelector('#time');
    eltime.innerHTML = 'TIME PASSED: ' + parseFloat(gTimePassed).toFixed(3);
    gTimePassed += 0.001;

}

function stopGame() {
    clearInterval(gTimeInterval);
    var elhead = document.querySelector('h1')
    elhead.innerText = 'Game Over!!!'
    console.log('after game over')
    gTimeInterval = null;
}














