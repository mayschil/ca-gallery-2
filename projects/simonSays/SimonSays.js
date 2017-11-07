
var gNumOfColors = 5;
var colors = ['tomato', 'orange', 'dodgerBlue', 'slateBlue', 'violet'];
var colorSamples = [];
var click = 0;
var turn = 0;
var timeoutID;
var timeoutID2;

function startGame() {

    randColors();
}

function createColors() {
    var namesOfColors = [];
    var elDiv = document.querySelector('.colors');
    for (var i = 0; i < gNumOfColors; i++) {
        var str = '';
        str += '<div class="color ' + colors[i] + '" onclick="cellClicked(this)"></div>'
        elDiv.innerHTML += str;
    }
}


//generate arr of colors
function randColors() {

    turn++;
    timeoutID = setTimeout(function () {
        for (var i = 0; i < turn; i++) {
            var temp = Math.floor(Math.random() * 4, 0);
            colorSamples[i] = colors[temp];
            console.log('colorSamples[i]', colorSamples[i])
            var elcolor = document.querySelector('.' + colorSamples[i]);
            elcolor.classList.add('chosenColor');
        }
    }, 1000);
}

function cellClicked(elCell) {

    clearTimeout(timeoutID);
    console.log('elCell', elCell)
    var str = elCell.classList.value;
    var vals = str.split(" ");
    var color = colorSamples.splice(0, 1);
    if (vals[1] === color[0]) console.log('YOU ARE CORRECT');
    else console.log('YOU ARE WRONG');

    if (colorSamples.length === 0) {
        console.log('YOU ARE CORRECT IN ALL TIMES');
        randColors();
    }
}

function restart() {
    colorSamples = [];
    click = 0;
    turn = 0;
    randColors();
    var elHead = document.querySelector('h1');
    elHead.innerText = 'SIMON SAYS';
}

