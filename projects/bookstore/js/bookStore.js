
var gBooks = [
    {
        Id: 1, Title: 'Obama: An Intimate Portrait ', Price: 28.99, description: 'Relive the extraordinary Presidency of\
         Barack Obama through White House photographer Pete Souzas behind the scenes images and stories some published \
         here for the first time--with a foreword from the President himself', Rate: 0
    },
    {
        Id: 2, Title: 'Milk and Vine: Inspirational Quotes From Classic Vines ', Price: 6.65, description:
        'Parodying the popular poetry book Milk and Honey, Milk and Vine offers a beautifully designed \
      reflection of the thought-provoking ideas that spread through this amazing platform', Rate: 0
    },
    {
        Id: 3, Title: 'The Getaway (Diary of a Wimpy Kid Book 12)', Price: 4, description: 'With the cold weather and the \
     stress of the approaching holiday season, the Heffleys decide to escape to a tropical island resort for some\
      much-needed rest and relaxation. A few days in paradise should do wonders for Greg and his frazzled family.', Rate: 0
    },
    {
        Id: 4, Title: 'The Wisdom of Sundays: Life-Changing Insights from Super Soul Conversations', Price: 16, description:
        'Oprah Winfrey says Super Soul Sunday is the television show she was born to do. “I see it as an offering, she\
     explains. “If you want to be more fully present and live your life with a wide-open heart, this is the place to\
      come to.”', Rate: 0
    },
    {
        Id: 5, Title: 'Wonder', Price: 10, description: 'SOON TO BE A MAJOR MOTION PICTURE STARRING JULIA ROBERTS, OWEN\
     WILSON, AND JACOB TREMBLAY!', Rate: 0
    },
    {
        Id: 6, Title: 'Hacks: The Inside Story of the Break-ins and Breakdowns That Put Donald Trump in the White House',
        Price: 7, description: 'From Donna Brazile, former DNC chair and legendary political operative, an explosive and\
      revealing new look at the 2016 election: the first insider account of the Russian hacking of the DNC and the\
       missteps by the Clinton campaign and Obama administration that enabled a Trump victory.', Rate: 0
    },
    {
        Id: 7, Title: 'Leonardo da Vinci', Price: 17, description: 'Based on thousands of pages from Leonardo’s astonishing\
     notebooks and new discoveries about his life and work, Walter Isaacson weaves a narrative that connects his art to\
      his science. He shows how Leonardo’s genius was based on skills we can improve in ourselves, such as passionate\
       curiosity, careful observation, and an imagination so playful that it flirted with fantasy.', Rate: 0
    },
    {
        Id: 8, Title: 'The Sun and Her Flowers', Price: 13, description: 'From Rupi Kaur, the #1 New York Times bestselling\
     author of milk and honey, comes her long-awaited second collection of poetry.  A vibrant and transcendent journey\
      about growth and healing. Ancestry and honoring one’s roots. Expatriation and rising up to find a home within\
       yourself.', Rate: 0
    },
    {
        Id: 9, Title: 'Medical Medium Thyroid Healing: The Truth behind Hashimoto, Graves Insomnia Hypothyroidism Thyroid\
     Nodules & Epstein-Barr', Price: 11, description: 'If you’re an avid reader of health books and articles and you\
      think you’re aware of the latest thyroid health information, you’re going to be more than surprised—maybe even\
       shocked—at how much more there is to know. Thyroid Healing is like nothing you have read or heard, and it will\
        bring you true comprehension of the undiscovered inner mechanics of our thyroids for the first time ever', Rate: 0
    }];

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
            '<td><button onclick="bookModal(' + i + ')"type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">read</button></td>' +
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
    str += '<img src="img/' + gBooks[id].Id + '.jpg">'
    str += '       <p>' + gBooks[id].description + '</p>'
    str += ' <p id="rate" >Rating: ' + gBooks[id].Rate + '</p>'
    str += '<i onclick=addRate(' + id + ') class="fa fa-thumbs-o-up" aria-hidden="true"></i>'
    str += '<i onclick=subRate(' + id + ') class="fa fa-thumbs-o-down" aria-hidden="true"></i>'
    str += '   </div>'
    str += '   <div class="modal-footer">'
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
    var swapped = true;
    while (swapped === true) {
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

function prevPage() {
    if (gCurrPage === 1) return;

    renderPage(gCurrPage - 1)
}

function nextPage() {
    renderPage(gCurrPage + 1);
    if (gCurrPage === 3) return;
}


function newBook() {

    var name = document.querySelector('#title');
    var newTitle = name.value;
    // console.log('newTitle', newTitle)
    var price = document.querySelector('#price');
    var newPrice = price.value;
    // console.log('newPrice', newPrice)
    var desc = document.querySelector('#desc');
    var newDesc = desc.value;
    // console.log('newDesc', newDesc)

    console.log(newTitle, newPrice, newDesc)
    addBook(newTitle, newPrice, newDesc);
}

function addBook(name, price, description) {
    console.log(name, price, description)

    var id = gBooks.length
    gBooks.push({ Id: id + 1, Title: name, Price: price, description: description });
    renderPage(3);
}