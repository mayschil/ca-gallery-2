
var gNumOfColors = 5;
var colors = ['tomato', 'orange', 'dodgerBlue', 'slateBlue', 'violet'];
var colorSamples = [];
var click = 0;
var turn = 0;

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
            var timeoutID = setTimeout(function () {
    for (var i = 0; i < turn; i++) {
            var temp = Math.floor(Math.random() * 4, 0);
            colorSamples[i] = colors[temp];
            var elcolor = document.querySelector('.' + colorSamples[i]);
            var timeoutID2 = setTimeout(function () {
                
                elcolor.classList.add('chosenColor');

            }, 1000);
       
    }
}, 1000);
    var length = colorSamples.length
    click = length;
}


    function cellClicked(elCell) {

        var str = elCell.classList.value;
        var vals = str.split(" ");
       
        if (vals[1] === (colorSamples[colorSamples.length - click])) {
            click--;
            //right chouce of color
            console.log('YOU ARE CORRECT');
        }
        //wrong choice of color
        else console.log('YOU ARE WRONG');
        //all colors were correctly discovered
        if (click === 0) {
            var elHead = document.querySelector('h1');
            elHead.innerText = 'SIMON SAYS';
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

