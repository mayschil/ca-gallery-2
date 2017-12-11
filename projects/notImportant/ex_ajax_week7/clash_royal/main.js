'use strict'

function getData() {
    axios.get('http://www.clashapi.xyz/api/chests ')
        .then(function (res) {
            console.log('res', res.data);   
            var regex = /-\d+/g;
            var chests = res.data.filter(function (chest) {
                return chest.gemCost > 0
            });
            chests.sort(function (a, b) {
                return a.gemCost - b.gemCost;
            });
            console.log('chests', chests)
            chests.forEach(function (chest) {
                var currImg = chest.idName.replace(regex, '');
                // console.log(currImg,chest.name);
                displayGame(chest.name, currImg)        
            });
        })
}

function displayGame(chestsName, chestImg) {
    var elTable = document.querySelector('#records');
    var strHtml =
        "<td>" + chestsName + "</td>" +
        "<td>" +
        "<img src='http://www.clashapi.xyz/images/chests/" + chestImg + ".png' >" +
        "</td>"
    elTable.innerHTML += strHtml;
}
