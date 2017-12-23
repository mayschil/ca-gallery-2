'use strict'

var gNum1 = '';
var gNum2 = null;
var gOper;
var gResult;
var gElScreen = document.querySelector('.screen');
var gMemoryNum;


function addDigit(digit) {  
    if (gNum2 === null) {
        gNum1 += digit      
        gElScreen.innerHTML = gNum1;
    } else {
       gNum2 += digit; 
       gElScreen.innerHTML = gNum2;
    }
}


function arithmetic(oper) {
    switch (oper) {
        case '+':
        case '-':
        case '*':
        case '/':
            gNum2 = '';
            gOper = oper;
            gElScreen.innerHTML = gOper;
            break;
        
        case '=':
            if (gOper === '+') { 
                gResult = (+gNum1) + (+gNum2);     
            } else if (gOper === '-') {
                gResult = (+gNum1) - (+gNum2);
            } else if (gOper === '*') {
                gResult = (+gNum1) * (+gNum2);
            } else if (gOper === '/') {
                gResult = (+gNum1) / (+gNum2);
            }
            console.log(gResult)
            gElScreen.innerHTML = gResult; 
            gNum1 = gResult;      
    }
}


function del() {
   
    if (gNum2 === null) {
        gNum1 = gNum1.slice(0, -1);
        gElScreen.innerHTML = gNum1;
    } else if (gResult) {     
        return;
    } else {
        gNum2 = gNum2.slice(0, -1);
        gElScreen.innerHTML = gNum2;
    }
}

function clearNum() {
    if (gNum2 === null) {
        gNum1 = '';
        gElScreen.innerHTML = gNum1;
    } else if (gResult) {
        gNum1 = '';
        gNum2 = null;
        gResult = '';
        gElScreen.innerHTML = gResult;
    } else {
        gNum2 = '';
        gElScreen.innerHTML = gNum2;
    }
}

function addToMemory(action) {
    switch (action) {
        case 'mc':
            gMemoryNum = 0;
            break;
        
        case 'mr':
            if (gNum2 === null) {
                gNum1 = +gMemoryNum;
                gElScreen.innerHTML = gNum1;
            } else {
                gNum2 = +gMemoryNum;;
                gElScreen.innerHTML = gNum2;                
            }
            break;
        
        case 'ms':
            gMemoryNum = +gElScreen.innerHTML;
            break;                      
        
        case 'mp':
            gMemoryNum = ((+gElScreen.innerHTML) + (+gMemoryNum));
            break;
        
        case 'mm':
            gMemoryNum = ((+gMemoryNum) - (+gElScreen.innerHTML));
            break;
    }
}



