
var gBooks = [{ Id: 0, Title: 'Learning Laravel', Price: 18.90, Rate: 0 },
{ Id: 1, Title: 'beginning with Laravel', Price: 6.65, Rate: 0 },
{ Id: 2, Title: 'Java for developers', Price: 4, Rate: 0 },
{ Id: 3, Title: 'Excel for developers', Price: 16, Rate: 0 },
{ Id: 4, Title: 'Word for developers', Price: 10, Rate: 0 },
{ Id: 5, Title: 'Bootstrap for developers', Price: 7, Rate: 0 },
{ Id: 6, Title: 'JS for developers', Price: 17, Rate: 0 },
{ Id: 7, Title: 'Infi for developers', Price: 13, Rate: 0 },
{ Id: 8, Title: 'English for developers', Price: 11, Rate: 0 }];

var gCurrPage = 1;

function initStore() {
    var books = getPageBooks(gCurrPage)
    renderBooks(books)
}

function renderPage(pageNum) {
    gCurrPage = pageNum
    var books = getPageBooks(pageNum)
    renderBooks(books)
}

function renderBooks(books) {

    var elBooksList = document.querySelector('#booksList');
    elBooksList.innerHTML = '';

    for (var i = 0; i < books.length; i++) {
        var bookItem = books[i];
        elBooksList.innerHTML +=
            '<tr> ' +
            '<td>' + bookItem.Id + '</td>' +
            '<td>' + bookItem.Title + '</td>' +
            '<td>' + bookItem.Price + '</td>' +
            '<td><button onclick="bookModal(' + i + ')"type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">read</button></td>' +
            '<td><button  id="' + books[i].Id + '" type="button" class="btn btn-success" onclick=" readAndUpdateBook(this)">Update</button></td>' +
            '<td><button  id="' + books[i].Id + '" type="button" class="btn btn-warning" onclick="deleteBook(this)">Delete</button></td>' +
            '</tr>';

    }

}

function deleteBook(elBook) {

    var bookId = elBook.id;
    for (var i = 0; i < gBooks.length; i++) {
        if (gBooks[i].Id === +bookId) gBooks.splice(i, 1);
    }
    renderPage(gCurrPage);
}

// function readAndAddNewBook() {

//     var title = prompt('add title');
//     var price = +prompt('add price');
//     addBook(title, price);

// }


function newBook() {

    var name = document.querySelector('#title');
    var newTitle = name.value;
    console.log('newTitle', newTitle)
    var price = document.querySelector('#price');
    var newPrice = price.value;
    console.log('newPrice', newPrice)
    addBook(newTitle, newPrice);
}

function addBook(name, price) {
    var id = gBooks.length
    gBooks.push({ Id: id, Title: name, Price: price });
    renderPage(3);
}

function readAndUpdateBook(elBook) {
    var price = +prompt('book new price');
    updateBook(elBook.id, price);
}

function updateBook(bookId, bookPrice) {
    for (var i = 0; i < gBooks.length; i++) {
        if (gBooks[i].Id === +bookId) {
            gBooks[i].Price = bookPrice;
        }
    }
    renderPage(gCurrPage);
}

function bookModal(id) {

    var str = '';
    // str += ' <i class="fa fa-thumbs-down" aria-hidden="true"></i>'
    str += ' <div class="modal-dialog" role="document">'
    str += '<div class="modal-content">'
    str += '    <div class="modal-header">'
    str += '       <h5 class="modal-title" id="exampleModalLabel">Price-' + gBooks[id].Price + '$</h5>'
    str += '       <button type="button" class="close" data-dismiss="modal" aria-label="Close">'
    str += '           <span aria-hidden="true">&times;</span>'
    str += '       </button>'
    str += '   </div>'
    str += '   <div class="modal-body">'
    str += '       <h1>' + gBooks[id].Title + '</h1>'
    str += '       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente accusantium quae perferendis molestiae'
    str += '   nemo, neque explicabo at tenetur maxime doloremque, repellendus nisi quaerat ullam suscipit excepturi'
    str += '   delectus natus recusandae! Voluptatem.</p>'
    str += ' <p id="rate" >Rating: ' + gBooks[id].Rate + '</p>'

    str += '   </div>'
    str += '   <div class="modal-footer">'

    str += '       <button onclick="addRate(' + id + ')" type="button" class="btn btn-success" >Thumb Up</button>'
    str += '       <button onclick="subRate(' + id + ')" type="button" class="btn btn-danger">Thumb Down</button>'
    str += '   </div>'
    str += ' </div>'
    str += '</div>'
    var elModal = document.querySelector('#exampleModal');
    elModal.innerHTML = str;
}

function addRate(id) {

    if (gBooks[id].Rate < 10)
        gBooks[id].Rate++;
    var elRate = document.querySelector("#rate");
    elRate.innerHTML = 'Rating: ' + gBooks[id].Rate;
}

function subRate(id) {

    if (gBooks[id].Rate >= 1)
        gBooks[id].Rate--;
    var elRate = document.querySelector("#rate");
    elRate.innerHTML = 'Rating: ' + gBooks[id].Rate;
}

function sortPrice() {
    // console.log('price')
    var swapped = true;

    while (swapped === true) {
        swapped = false;
        for (var i = 0; i < gBooks.length - 1; i++) {
            if (gBooks[i].Price > gBooks[i + 1].Price) {
                var temp = gBooks[i];
                gBooks[i] = gBooks[i + 1];
                gBooks[i + 1] = temp;
                swapped = true;
            }
        }
    }
    initStore();
}


function sortName() {
    // console.log('name')
    var swapped = true;
    while(swapped === true) {
        swapped = false;
        for (var i = 0; i < gBooks.length - 1; i++) {
            if (gBooks[i].Title > gBooks[i + 1].Title) {
                var temp = gBooks[i];
                gBooks[i] = gBooks[i + 1];
                gBooks[i + 1] = temp;
                swapped = true;
            }
        }
    }
    initStore();
}

function getPageBooks(pageNumber) {

    var books = [];
    if (pageNumber === 1) {
        for (var i = 0; i < 3; i++) {
            books.push(gBooks[i]);
        }
        return books;
    }

    if (pageNumber === 2) {
        for (var i = 3; i < 6; i++) {
            books.push(gBooks[i]);
        }
        return books;
    }
    if (pageNumber === 3) {
        for (var i = 6; i < gBooks.length; i++) {
            books.push(gBooks[i]);
        }
        return books;
    }
}

