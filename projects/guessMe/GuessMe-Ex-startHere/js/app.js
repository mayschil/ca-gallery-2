'use strict';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;
var newGuess;
var newQuest;

$(document).ready(init);

function init() {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    gCurrQuest = gQuestsTree;
}

function startGuessing() {
    // TODO: hide the gameStart section
    console.log('asfasfsafsafasf')
    $('.gameStart').hide();
    $('.gameQuest').show();

    // var elStart = document.querySelector('.gameStart');
    // var elGameQuest = document.querySelector('.gameQuest');
    // elStart.innerHTML = elGameQuest.innerHTML;
    renderQuest();
}

function renderQuest() {
    // TODO: select the <h2> inside gameQuest and update its text by the currQuest text

    var $elQuset = $('.quest');
    $elQuset.html(gCurrQuest.txt);
    // var elQuest = document.querySelector('.quest');
    // elQuest.innerHTML = gCurrQuest.txt;
}

function userResponse(res) {
    console.log(res)
    // If this node has no children
    if (gCurrQuest.yes === null) {
        if (res === 'yes') {
            console.log('Yes, I knew it!');
            // TODO: improve UX
        } else {
            console.log('I dont know...teach me!1')
            // TODO: hide and show gameNewQuest section
        }
    } else {
        // TODO: update the prev, curr and res global vars
        if (res === 'yes') {
            console.log('Yes, I knew it!')
            var res = createQuest(gCurrQuest.yes.txt);
            gCurrQuest = res;
            renderQuest();
        }
        else {
            console.log('I dont know...teach me!2');
            $('.gameQuest').hide();
            $('.gameNewQuest').show();
            // var elStart = document.querySelector('.gameStart');
            // var elNewGameQuest = document.querySelector('.gameNewQuest');
            // elStart.innerHTML = elNewGameQuest.innerHTML;
        }
    }
}

function addGuess() {
    // var elNewGuess = document.querySelector('#newGuess');
    // newGuess = elNewGuess.value;
    // var elNewQuest = document.querySelector('#newQuest');
    // newQuest = elNewQuest.value;

    var $elNewGuess = $('#newGuess');
    var $elNewQuest = $('#newQuest');

    gPrevQuest = gCurrQuest;
    gLastRes = gCurrQuest.no;
    gPrevQuest.no = createQuest($elNewQuest.val());
    gPrevQuest.no.yes = createQuest($elNewGuess.val());
    gPrevQuest.no.no = gLastRes;
    restartGame();
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function restartGame() {
    $('.gameNewQuest').hide();
    $('.gameStart').show();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    gLastRes = null;
}