


(function () {
    var prmData = fetch('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}');
    prmData.then(handleData);
})();


function handleData(res) {
    console.log('handleData', res);

    var prmJSON = res.json();

    prmJSON.then(function (data) {
        console.log('DATA: ', data);
        var elTable = document.querySelector('#records');
        data.forEach(function (item) {
            var strHtml =
                "<td>" + item.fname + "</td>" +
                "<td>" + item.lname + "</td>" +
                "<td>" + item.tel + "</td>";
            elTable.innerHTML += strHtml;
        })
    });
}