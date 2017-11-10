'use strict';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;

$(document).ready(init);

function init() {
    console.log('hiii')
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    gCurrQuest = gQuestsTree;
}

function startGuessing() {
    // TODO: hide the gameStart section
    $('.gameStart').hide();
    $('.gameQuest').show();
    renderQuest();
}

function renderQuest() {
    // TODO: select the <h2> inside gameQuest and update its text by the currQuest text

    var $elQuset = $('.quest');
    $elQuset.html(gCurrQuest.txt);
}

function userResponse(res) {
    // If this node has no children
    if (gCurrQuest[res] === null) {
        if (res === 'yes') {
            var $elQuset = $('.quest');
            $elQuset.html('I Knew It!!!');
            console.log('Yes, I knew it!');
        } else {
            console.log('I dont know...teach me!1')
            $('.gameQuest').hide();
            $('.gameNewQuest').show();
            // TODO: hide and show gameNewQuest section
        }
    }

    else {
        gPrevQuest = gCurrQuest;
        gLastRes = res;
        gCurrQuest = gCurrQuest[res];
        gLastRes = res;
        renderQuest();
    }
    // TODO: update the prev, curr and res global vars
}

function addGuess() {

    var $elNewGuess = $('#newGuess');
    var $elNewQuest = $('#newQuest');
    gPrevQuest[gLastRes] = createQuest($elNewQuest.val());
    gPrevQuest[gLastRes].yes = createQuest($elNewGuess.val());
    gPrevQuest[gLastRes].no = gCurrQuest;
    restartGame();
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function updateStorage() {

    var strQuestTree = JSON.stringify(gQuestsTree);
    localStorage.questTree = strQuestTree;
}

function restartGame() {
    updateStorage();
    $('.gameNewQuest').hide();
    $('.gameStart').show();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    gLastRes = null;
}

