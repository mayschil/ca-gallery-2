var gCurrQuestIdx = 0;
var elPic;
var elOptsList;
var isRight;

var gQuests = [
    { num: 1, opt:['It is the cookie monster','It is a little boy'], correctOptIndex:0},
    { num: 2, opt:['It is a green monster','It is a little girl'], correctOptIndex:0},
    { num: 3, opt:['It is a scary monster','It is a little baby'], correctOptIndex:0}
];

function init() {
    elPic = document.querySelector('#quest-image');
    elOptsList = document.querySelector('#quest-opts');    
    gCurrQuestIdx = 0;
    renderQuest();
}
   
function renderQuest() {
    elPic.innerHTML = '<img src="' + (gCurrQuestIdx) + '.png" >';
    var opts = gQuests[gCurrQuestIdx].opt;
    var str = '';
    for (var i = 0; i < opts.length; i++) { 
        str += '<li><button onclick="checkAnswer(this)">' + opts[i] + '</button></li>';       
    }
    elOptsList.innerHTML = str;
}

function checkAnswer(elOpt) {

    var userAnswer = elOpt.innerText;
    var corrctAnswerIndex = gQuests[gCurrQuestIdx].correctOptIndex;
    var correctAnswer = gQuests[gCurrQuestIdx].opt[corrctAnswerIndex];
    console.log('userAnswer',userAnswer) 
    console.log('correctAnswer',correctAnswer) 
    

    if( userAnswer === correctAnswer ) { 
        if (gCurrQuestIdx < (gQuests.length-1)){
            elVictory = document.querySelector('h1');
            elVictory.innerHTML=('Yor Are Right');
            gCurrQuestIdx ++;
            renderQuest();
        }
        else {
 {
            elPic.innerHTML = '<img src="5.png" >';
            elVictory = document.querySelector('h1');
            elVictory.innerHTML=('You Did It')
            elOptsList.innerHTML = '';
         }
        }
    }
    else {
        elVictory = document.querySelector('h1');
        elVictory.innerHTML=('Try Again');
     
        
    } 
        
}

   
