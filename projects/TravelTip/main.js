'use strict'

var gLat;
var gLng;

var gUrl;


function initPage() {
    getPosition();
}

function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    // One shot position getting or continus watch
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
    //navigator.geolocation.watchPosition(showLocation, handleLocationError);
}

function showLocation(position) {
    // console.log('position', position);
    // document.getElementById("latitude").innerHTML = position.coords.latitude;
    // document.getElementById("longitude").innerHTML = position.coords.longitude;
    // document.getElementById("accuracy").innerHTML = position.coords.accuracy;
    var date = new Date(position.timestamp);
    // document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    getGeoLocation(position.coords.latitude, position.coords.longitude);
    gLat = position.coords.latitude;
    gLng = position.coords.longitude;
    gUrl= `https://mayschil.github.io/ca-gallery-2/projects/TravelTip/index.html?lat=${gLat}&lng=${gLng} `;    
    initMap(position.coords.latitude, position.coords.longitude);
}

function copy() {
    var Url = document.getElementById("url");
    Url.innerHTML = gUrl;
    console.log(Url.innerHTML)
    Url.select();
    document.execCommand("copy");
}


function initMap(lat, lng) {
    if (!lat) lat = 32.0749831;

    if (!lng) lng = 34.9120554;



    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: { lat: lat, lng: lng },
            zoom: 21
        }
    );

    var image = 'oldman.png';
    var marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: 'You Are Here!',
        icon: image
    });

    getWeather(lat, lng);
    console.log('im here')
}


function getGeoLocation(lat, lng) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBmuWYnO-sINriMTx43J8ZUWho25YphaIs`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            var address = data.results[0].formatted_address;
            document.querySelector('.pst').innerText = address;
        })
}


function showMyLocation() {

    var elLocation = document.querySelector('input').value;
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${elLocation}&key=AIzaSyBmuWYnO-sINriMTx43J8ZUWho25YphaIs`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            var lat = data.results[0].geometry.location.lat;
            var lng = data.results[0].geometry.location.lng;
            getGeoLocation(lat, lng);
            initMap(lat, lng)
        })
}

function getWeather(lat, lon) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=c0a503c32289640d55ec84accda09d5f`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log('temp', data.main.temp)
            document.querySelector('.temp').innerHTML = data.main.temp;
            document.querySelector('.weather').innerHTML = data.weather[0].description;

        })
}


function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}


