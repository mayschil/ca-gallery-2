'use strict'

const YT_KEY = 'AIzaSyBCSqrSKy5kKik3k1GJAw0YAIBTvWTqokU';
var gValue = '';


function displaySearch() {
    var elSearch = document.querySelector('input');
    gValue = elSearch.value;
    document.querySelector('.videos').innerHTML = '';
    elSearch.value = '';
    getData();
}


function getData() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${gValue}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            handleData(data.items)
        })
}

function handleData(items) {
    var elList = document.querySelector('.videos');
    items.forEach((item) => {
        console.log(item.snippet.title)
        var strHtml = `
        <div class="video-div" onclick="playVideo('${item.id.videoId}','${item.snippet.title}')">
        <p class="titel1">${item.snippet.title}</p>
        <div>
        <img class="search-img" src="${item.snippet.thumbnails.default.url}">
        </div>
        </div>
        `
        elList.innerHTML += strHtml;
    });
}

function playVideo(videoID, videoTitle) {
    var regex = /\s+\S*$/;
    console.log('videoTitle', videoTitle)
    var elFrame = document.querySelector('iframe');
    elFrame.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
    searchWikiData(videoTitle);
}

function searchWikiData(videoTitle) {
    fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${videoTitle}&limit=5`)
        .then((res) => {
            return res.json();
        })
        .then((info) => {
            if (info[2].length === 0) {
                videoTitle = videoTitle.replace(/\s+\S*$/, "");
                searchWikiData(videoTitle);
            }
            else {
                showData(info);
                return
            }
        })
    return
}

function showData(info) {
    console.log('indo',info)
    var elInfo = document.querySelector('.wiki-info');

    if (!elInfo.innerHTML) return;
    else {
        elInfo.innerHTML='';
        var strHtml = `
            <div>
            <p class="title" >${info[0]}</p>
            <a href="${info[3][0]}"><p class="decs">${info[2]}</a>
            </p>
            <button class="btn-info" style="display:none" onclick="closeInfo()">Close</button>
            </div>
            `
        elInfo.innerHTML += strHtml;
    }
}

