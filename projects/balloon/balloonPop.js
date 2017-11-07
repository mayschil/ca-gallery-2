var gBalloons=[]; 
var gIsGame;
var gIntervalBalloons=0;

function initGame(){

    createBalloons();
    var str='';
    elDiv = document.querySelector('.balloon');
    for (var i = 0; i < gBalloons.length; i++){
        str += '<div class="balloons balloon'+(i+1)+'" onclick="balloonClicked(this)"></div>';
        elDiv.innerHTML = str;
    }
    
}

function startGame() {

    gIntervalBalloons = setInterval(function () {
    var elBalloons = document.querySelectorAll('.balloons');
    for (var i = 0; i < elBalloons.length; i++) {
        var elBalloon = elBalloons[i];
        var balloon = gBalloons[i];
        var num = balloon.speed;
        balloon.bottom += num;
        // balloon.speed += num;                         
        elBalloon.style.bottom = balloon.bottom + 'px';
    }
    }, 1000);
    return; 
}

function restartGame(){
    clearInterval(gIntervalBalloons);
    gIntervalBalloons = null;
    gBalloons=[];
    initGame();
}

function createBalloons() {
    var balloon1 = { bottom: 0, speed: 8 };
    gBalloons.push(balloon1);
    var balloon2 = { bottom: 0, speed: 5 };
    gBalloons.push(balloon2);    
}

function stopGame(){
    clearInterval(gIntervalBalloons);
    gIntervalBalloons = null;   
}



function balloonClicked(elBalloon) {
    // elBalloons.style.display = 'none';
    elBalloon.classList.add('hidden');
    // var audioYouAreCorrect = new Audio('win.mp3');    
    // audioYouAreCorrect.play();
}




