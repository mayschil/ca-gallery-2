'use strict'

// var elAnswer = document.querySelector('input').value;

function getData() {
    axios.get('https://yesno.wtf/api')
        .then(function (res) {
            document.querySelector('main > h1').innerText = res.data.answer;
            document.querySelector('main > img').src = res.data.image;
            if (res.data.answer === 'yes') {
                axios.get('http://api.icndb.com/jokes/random')
                    .then(function (item) {
                        console.log(item.data.value)
                        document.querySelector('main > h2').innerText = JSON.stringify(item.data.value.joke);
                    })

            }


        })
}