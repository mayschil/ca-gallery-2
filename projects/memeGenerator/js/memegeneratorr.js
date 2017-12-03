'use strict';

var gCtx;
var gCanvas = document.getElementById('canvas');

var gMeme = {
    src: '',
    elImg: null,
    selectedImgId: 0,
    txts: [{
        line: '',
        size: 0,
        align: 'left',
        color: 'black',
        // ctxAligenLine: 'start',
        ctxFontSize: 50,
        ctxFontFamily: "Impact",
        ctxFontLine: "50px Impact",
        ctxShadowColor: '#000000',
        ctxShadowBlur: 0,
        x: 20,
        y: 80
    },
    {
        line: '',
        size: 0,
        align: 'left',
        color: 'red',
        // ctxAligenLine: 'start',
        ctxFontLine: "50px Impact",
        ctxFontFamily: "Impact",
        ctxFontSize: 50,
        ctxShadowBlur: 0,
        ctxShadowColor: '#000000',
        x: 20,
        y: 350
    }]
};

var imageLoader = document.querySelector('.img-url');
console.log('imageLoader',imageLoader)
imageLoader.addEventListener('change', handleImage, false);


function handleImage(e){
    console.log('im here')
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.src = event.target.result;
        console.log(' img.src', img.src)
        img.onload = function(){
            gCanvas.width = img.width;
            gCanvas.height = img.height;
            gCtx.drawImage(img,0,0,gCanvas.width,gCanvas.height);
            // setGMeme();
            gMeme.elImg = img;
        }
    }    
    reader.readAsDataURL(e.target.files[0]);   
}



function updateText(idx) {
    gMeme.txts[idx].line = event.target.value;
    drawMeme();
}

function drawMeme() {
    var color1Selected = document.getElementById('clrPicker0').value;
    var color2Selected = document.getElementById('clrPicker1').value;

    gMeme.txts[0].color = (!color1Selected ? '#000000' : color1Selected);
    gMeme.txts[1].color = (!color2Selected ? '#000000' : color2Selected);

    gCtx.drawImage(gMeme.elImg, 0, 0, gMeme.originalWidth, gMeme.originalHeight);
    gCtx.font = gMeme.ctxFontLine;
    gMeme.txts.forEach(function (txt) {
        gCtx.fillStyle = txt.color;
        gCtx.ctxFontLine = txt.ctxFontLine;
        gCtx.font = txt.ctxFontLine;
        gCtx.shadowColor = txt.color;
        gCtx.shadowBlur = txt.ctxShadowBlur;
        gCtx.textAlign = txt.align;
        gCtx.fillText(txt.line, txt.x, txt.y);

    });
}

function updateFontFamily(elFontFamily) {

    var idx = (elFontFamily.id === 'selecth1FontFamily') ? 0 : 1;
    gMeme.txts[idx].ctxFontFamily = elFontFamily.value;
    gMeme.txts[idx].ctxFontLine = '50px ' + elFontFamily.value;
    drawMeme();
}

function updateColor(elInput) {

    var idx = (elInput.id === 'clrPicker0') ? 0 : 1;
    gMeme.txts[idx].color = elInput.value;
    drawMeme();
}


function changeFontSize(txtLine, size) {

    var idx = (txtLine === 'top') ? 0 : 1;
    if (size === 'plus') {
        gMeme.txts[idx].ctxFontSize += 2;
        gMeme.txts[idx].ctxFontLine = gMeme.txts[idx].ctxFontSize + "px" + " " + gMeme.txts[idx].ctxFontFamily;
    }
    else {
        if (gMeme.txts[idx].ctxFontSize > 2) {
            gMeme.txts[idx].ctxFontSize -= 2;
            gMeme.txts[idx].ctxFontLine = gMeme.txts[idx].ctxFontSize + "px" + " " + gMeme.txts[idx].ctxFontFamily;
        }
    }
    drawMeme();
}

function toggleShadow(txtLine) {
    var idx = (txtLine === 0) ? 0 : 1;

    if (!gMeme.txts[idx].ctxShadowBlur) {
        gMeme.txts[idx].ctxShadowColor = gMeme.txts[idx].color;
        gCtx.ctxShadowColor = gMeme.txts[idx].ctxShadowBlur = 9;
    }
    else {
        gCtx.ctxShadowColor = gMeme.txts[idx].ctxShadowBlur = 0;
    }
    drawMeme();
}



function align_txt(direction, idx) {

    switch (direction) {
        case 'r':
            gMeme.txts[idx].align = 'right';
            gMeme.txts[idx].x = gMeme.originalWidth * 0.9;

            break;
        case 'c':
            gMeme.txts[idx].align = 'center';
            gMeme.txts[idx].x = gMeme.originalWidth * 0.5;

            break;
        case 'l':
            gMeme.txts[idx].align = 'left';
            gMeme.txts[idx].x = gMeme.originalWidth * 0.1;

            break;
    }
    drawMeme();
}


function BackToList() {

    var elMemeGenerator = document.querySelector("#memeGenerator");
    elMemeGenerator.style.display = 'none';
    var elBody = document.querySelector("#mainPage");
    elBody.style.display = 'block';
}

function makeMeme(elImg) {
    showEditer()
    gMeme.src = 'img' + elImg.src.split('img')[1];
    gMeme.originalWidth = document.getElementById(elImg.id).naturalWidth;
    gMeme.originalHeight = document.getElementById(elImg.id).naturalHeight;
    var img = new Image();
    gMeme.elImg = img;
    img.src = gMeme.src;

    img.onload = function () {
        gCanvas = document.getElementById('canvas');
        gCtx = gCanvas.getContext('2d');
        gCtx.canvas.width = gMeme.originalWidth;
        gCtx.canvas.height = gMeme.originalHeight;
        gCtx.drawImage(img, 0, 0, gMeme.originalWidth, gMeme.originalHeight);
    };
}


function showEditer() {
    var elPage = document.querySelector('#mainPage');
    var elMemeGenerator = document.querySelector('#memeGenerator');
    elMemeGenerator.style.display = 'flex';
}

function downloadImg(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'myMeme.jpg';
    
}