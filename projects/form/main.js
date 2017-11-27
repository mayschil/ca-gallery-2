'use strict'



function checkform() {

    var elCode = document.querySelector('#CaptchaInput');
    var msg = '';
    if (!elCode.value) msg = ' Please Enter Code.';
    else
        if (ValidCaptcha(elCode.value) === false) msg = 'The Code Does Not Match';

    var el = document.querySelector('#name');
    if (!el.value) {
        el.style.backgroundColor='red'; 
        return false;
    }
       
    if (msg) {
        alert(msg);
        return false;
    } 
}

var a = Math.ceil(Math.random() * 9) + '';
var b = Math.ceil(Math.random() * 9) + '';
var c = Math.ceil(Math.random() * 9) + '';


var code = a + b + c;
document.querySelector('#txtCaptcha').value = code;
document.querySelector('.CaptchaDiv').innerHTML = code;

function ValidCaptcha() {

    var str1 = document.querySelector('#txtCaptcha').value;
    var str2 = document.querySelector('#CaptchaInput').value;
    console.log(str1, str2)
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }
}

