import storageService from './StorageService.js'



console.log('YES!!');

function query(term) {
    if (!term) return Promise.reject('No Query');
    return fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${term}`)
        .then(res => res.json())
        .then(res => {
            console.log('res', res)
            if (!res.items || !res.items.length) return []
            return res.items.map(({volumeInfo, saleInfo}) => ({
                id: volumeInfo.industryIdentifiers[0].identifier,
                title: volumeInfo.title,
                subtitle: volumeInfo.subtitle,
                desc: volumeInfo.description,
                author: (volumeInfo.authors && volumeInfo.authors.length) ? volumeInfo.authors[0] : '',
                pageCount: volumeInfo.pageCount || 0,
                price: (saleInfo.saleability === 'FOR_SALE') ? saleInfo.listPrice.amount +' ILS' : 'NOT FOR SALE',
                imgUrl: (volumeInfo.imageLinks) ? volumeInfo.imageLinks.thumbnail : null
            }))

        })
}

const KEY_STORE = 'booksIRead';

function saveBookFeedback(book) {
    var books = getBookFeedbacks();
    books.push(book)
    storageService.store(KEY_STORE, books);
}


function getBookFeedbacks() {
    var books = storageService.load(KEY_STORE) || [];
    return books;
}

function getBookById(id) {
    console.log('id', id)
    var books = storageService.load(KEY_STORE) || [];
    console.log('books', books, id)
    var wantedBook = books.find(book => book.id === id);
    console.log('wantedBook', wantedBook)
    return wantedBook;
}

//use filter. NOT index
//feedbaks = feedbaks.fiter(f== f.id =>....)
function deleteBookChosen(id) {
    console.log('BookService deleteBookChosen', id)
    var books = storageService.load(KEY_STORE);
    var idx = books.findIndex(book => book.id === id);
    books.splice(idx, 1);
    storageService.store(KEY_STORE, books);
    // console.log('book after delete', books)
}

export default {
    query,
    saveBookFeedback,
    getBookFeedbacks,
    getBookById,
    deleteBookChosen
}