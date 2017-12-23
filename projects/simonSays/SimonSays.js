
var gNumOfColors = 4;
var colors = ['tomato', 'orange', 'dodgerBlue', 'violet'];
var colorSamples = [];
var gTurn = 1;


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

    for (var i = 0; i < gTurn; i++) {
        var temp = Math.floor(Math.random() * 4, 0);
        colorSamples[i] = (colors[temp]);
    }
    showColors(colorSamples);
}


function showColors(colorSamples) {
    console.log(colorSamples);

    colorSamples.forEach(function (item, i) {
        var elcolor = document.querySelector('.' + item);
        setTimeout(function () {
            elcolor.classList.add('chosenColor');
            setTimeout(function () {
                elcolor.classList.remove('chosenColor');
            }, 500);
        }, (i + 1) * 1000);
    });

}

function cellClicked(elCell) {
    var str = elCell.classList.value;
    var vals = str.split(" ");
    if (vals[0] === colorSamples[0]) {
        console.log('YOU ARE CORRECT');
        var color = colorSamples.splice(0, 1);
    }
        
    else console.log('YOU ARE WRONG - TRY AGAIN');
    if (colorSamples.length === 0) {
        console.log('YOU ARE CORRECT IN ALL TIMES');
        gTurn++;
        randColors();
    }
}

function restart() {
    colorSamples = [];
    gTurn = 1;
    randColors();
    var elHead = document.querySelector('h1');
    elHead.innerText = 'SIMON SAYS';
}

