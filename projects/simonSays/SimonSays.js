
var gNumOfColors = 4;
var colors = ['tomato', 'orange', 'dodgerBlue', 'violet'];
var colorSamples = [];
var gTurn = 1;
var timeoutID;
var gI = 0;
var gProcess;

function startGame() {
    randColors();
}

function createColors() {
    var namesOfColors = [];
    var elColor = document.querySelector('.color');
    for (var i = 0; i < gNumOfColors; i++) {
        var str = '';
        str += '<button class="' + colors[i] + '" onclick="cellClicked(this)"></button>'
        elColor.innerHTML += str;
    }
}


function randColors() {

    var temp = Math.floor(Math.random() * 4, 0);
    colorSamples[gI] = colors[temp];
    console.log('colorSamples[i]', colorSamples[gI])
    var elcolor = document.querySelector('.' + colorSamples[gI]);
    elcolor.classList.add('chosenColor');
    console.log('gI gTurn', gI, gTurn)
    gI++;
    if (gI < gTurn && gProcess === true) setTimeout(randColors, 1000);

}


function cellClicked(elCell) {

    console.log('elCell', elCell)
    var str = elCell.classList.value;
    var vals = str.split(" ");
    var color = colorSamples.splice(0, 1);
    if (vals[0] === color[0]) console.log('YOU ARE CORRECT');
    else console.log('YOU ARE WRONG');

    if (colorSamples.length === 0) {
        console.log('YOU ARE CORRECT IN ALL TIMES');
        gI = 0;
        gTurn++;
        setTimeout(randColors, 1000);
    }
}

function restart() {
    colorSamples = [];
    // click = 0;
    gTurn = 0;
    randColors();
    var elHead = document.querySelector('h1');
    elHead.innerText = 'SIMON SAYS';
}

