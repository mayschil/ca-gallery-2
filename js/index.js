var gProj = [];

function initPage() {

    gProj = [{ id: 'simonSays', name: 'Simon Says', title: 'Memory Game', decs: 'Repeat the order of the selected colors' },
    { id: 'minesweeper', name: 'Minesweeper', title: 'Minesweeper', decs: 'Find where the mines are' },
    { id: 'touchNum', name: 'Touch The Nums', title: 'Touch Nums', decs: 'Select the numbers by the right order' },
    { id: 'balloon', name: 'PopBalloons', title: 'Pop Balloons', decs: 'Pop those balloons' },
    { id: 'calc', name: 'Calculator', title: 'calculator', decs: 'Calculate as you wish' },
    { id: 'guessANumber', name: 'Guess the numbers', title: 'Guess the numbers', decs: 'Try your luck' }
    ]
    render();
}

function render() {

    getGalleryHtml();
    getModalHtml();
}

function getGalleryHtml() {

    for (var i = 0; i < gProj.length; i++) {
        var str = '';
        var sum = i + 1;
        str += '<div class="col-md-4 col-sm-6 portfolio-item">ca-gallery-2'
        str += ' <a class="portfolio-link" data-toggle="modal" href="#portfolioModal' + sum + '"> '
        str += ' <div class="portfolio-hover"> '
        str += ' <div class="portfolio-hover-content"> '
        str += ' <i class="fa fa-plus fa-3x"></i> '
        str += ' </div> '
        str += ' </div> '
        str += ' <img class="img-fluid" src="img/portfolio/' + gProj[i].id + '.jpg" > '
        str += ' </a> '
        str += ' <div class="portfolio-caption"> '
        str += ' <h4>' + gProj[i].name + '</h4> '
        str += ' <p class="text-muted">' + gProj[i].title + '</p> '
        str += ' </div> '
        str += '</div> '
        var elMat = document.querySelector('#my-portfolio');
        elMat.innerHTML += str;
    }
}

function getModalHtml() {
    for (var i = 0; i < gProj.length; i++) {
        var str = '';
        str += ' <div class="modal-dialog">'
        str += '<div class="modal-content">'
        str += '<div class="close-modal" data-dismiss="modal">'
        str += '<div class="lr">'
        str += '<div class="rl"></div>'
        str += ' </div>'
        str += '</div>'
        str += '<div class="container">'
        str += '<div class="row">'
        str += '<div class="col-lg-8 mx-auto">'
        str += '  <div class="modal-body">'
        str += '   <!-- Project Details Go Here -->'
        str += '   <h2>' + gProj[i].name + '</h2>'
        //    str+='   <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>'
        str += '  <img class="img-fluid" src="img/portfolio/' + gProj[i].id + '-full.jpg" >'
        str += '   <p>' + gProj[i].decs + '</p>'
        str += '   <ul class="list-inline">'
        str += '     <li>Date: January 2017</li>'
        str += '     <li>Client: Threads</li>'
        str += '     <li>Category: Illustration</li>'
        console.log(gProj[i].id)
        str += '     <li ><a href="projects/'+ gProj[i].id +'/index.html">Press and play</a></li>'
        str += '   </ul>'
        str += '   <button class="btn btn-primary" data-dismiss="modal" type="button">'
        str += '       <i class="fa fa-times"></i>'
        str += '       Close Project</button>'
        str += '  </div>'
        str += ' </div>'
        str += ' </div>'
        str += ' </div>'
        str += ' </div>'
        str += '</div>'

        var sum = i + 1;
        var elMat = document.querySelector('#portfolioModal' + sum + '');
        elMat.innerHTML += str;
    }

}

function contactForm() {

var str='';

str+='<form>'
str+='<div class="form-group">'
str+='<label for="exampleInputEmail1">Email address</label>'
str+='<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">'
str+='<small id="emailHelp" class="form-text text-muted">Well never share your email with anyone else.</small>'
str+=' </div>'
str+='<div class="form-group">'
str+='<label for="exampleInputSubject">Subject</label>'
str+='<input id="txt" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Body">'

str+='<div class="form-group">'
str+='<label for="exampleInputText">Text</label>'
str+='<input type="text" class="form-control" id="exampleInputPassword1" placeholder="Text Body">'
str+='</div>'
str+='<div class="form-check">'
str+='<label class="form-check-label">'
str+=' <input type="checkbox" class="form-check-input">'
str+=' Check me out'
str+='</label>'
str+='</div>'
str+='<button type="button" class="btn btn-primary" onclick="submitMail()">Submit</button>'
str+='</form>'

    var elContact = document.querySelector('#contact');
    elContact.innerHTML = str;

}

function submitMail(){

    location = "https://mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=SUBJECT&b ody=BODY ";
}