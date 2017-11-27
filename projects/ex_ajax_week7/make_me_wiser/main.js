'use strict'

var elMain = document.querySelector('main');    
function getData() {
    elMain.style.display = 'none';                    
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE &&
            httpRequest.status === 200) {
            var res = JSON.parse(httpRequest.responseText)
            console.log('res.answer',res)
            document.querySelector('main > h1').innerText = res.quoteText;
            elMain.style.display = 'block';
        } else if (httpRequest.readyState === XMLHttpRequest.DONE){
            console.log('Error talking to server');
        }
    }

    httpRequest.open("GET", "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json", true);
    httpRequest.send();
}