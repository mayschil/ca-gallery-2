
var gNum1 = 0;;
var gNum2 = 0;
var gMemoryNum = 0;
var gOp;

function addDigit(elNum) {

    var num = +getCellNum(elNum.id);
    if (!gNum1) {
        gNum1 += num;
        gNum2 += gNum1;
        var elScreen = document.querySelector('#screen');
        elScreen.innerHTML = gNum2;
    }
    else {
        gNum2 = gNum2 * 10 + num;
        var elScreen = document.querySelector('#screen');
        elScreen.innerHTML = gNum2;
    }
}

function equal() {

    var elEqual = document.querySelector('#screen');
    elEqual.innerHTML = eval(gNum2);
}

function sum() {

    gOp = '+';
    gNum2 += gOp;
    elScreen = document.querySelector('#screen');
    elScreen.innerHTML = gNum2;
    gNum1 = '';
}

function pow(){

    gOp = '**';
    gNum2 += gOp;
    elScreen = document.querySelector('#screen');
    elScreen.innerHTML = gNum2;
    gNum1 = '';
}

function root(){

    // gOp = '** 1/';
    // gNum2 += gOp;

    elScreen = document.querySelector('#screen');
    elScreen.innerHTML = Math.sqrt(gNum2);
    gNum1 = '';
}

function div() {

    gOp = '/';
    gNum2 += gOp;
    elScreen = document.querySelector('#screen');
    elScreen.innerHTML = gNum2;
    gNum1 = '';
}

function subs() {

    gOp = '-';
    gNum2 += gOp;
    elScreen = document.querySelector('#screen');
    elScreen.innerHTML = gNum2;
    gNum1 = '';
}

function mult() {

    gOp = '*';
    gNum2 += gOp;
    elScreen = document.querySelector('#screen');
    elScreen.innerHTML = gNum2;
    gNum1 = '';
}

function getCellNum(elNum) {

    var arrId = elNum.split('-');
    var num = arrId[1];
    return num;
}


function clearNum() {
    gNum1 = null;
    gNum2 = null;
    var elScreen = document.querySelector('#screen');
    elScreen.innerHTML = 0;
}

function addMemory(elButton) {
    // console.log('gNum2',eval(gNum2))
    gMemoryNum += eval(gNum2);
}

function removeMemory(elButton) {
    gMemoryNum -= eval(gNum2);

}

function clearMemory(elButton) {
    gMemoryNum = 0;
}

function pullData(elButton) {
    document.querySelector('#screen').innerHTML = gMemoryNum;
}


function hex() {
    console.log('hi')

    var res = parseInt(eval(gNum2), 10).toString(16);
    document.querySelector('#screen').innerHTML = res.toLocaleUpperCase();

}
function dec() {
    console.log('hii')
    document.querySelector('#screen').innerHTML = eval(gNum2);
}
function oct() {
    document.querySelector('#screen').innerHTML = parseInt(eval(gNum2), 10).toString(8);
}
function bin() {

    document.querySelector('#screen').innerHTML = parseInt(eval(gNum2), 10).toString(2);
}


function deleteNum() {

    var n = gNum2.toString();    
    console.log('n',n)
    gNum2 = n.substring(0, n.length - 1);
    var elScreen = document.querySelector('#screen');
    elScreen.innerHTML = gNum2
}

function decP(){

    gNum2+='.';
    var elScreen = document.querySelector('#screen');
    elScreen.innerHTML = gNum2;
    gNum1 = '';
}