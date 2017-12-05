import BookService from '../services/BookService.js'
import BookDetails from '../cmps/BookDetails.js'

export default {
    template: `
    <section>
        <h1>Books I Read</h1>
        <input type="search" v-model="term" @input="suggest" placeholder="Search for a book" />
        <ul>
            <li v-for="book in books" @click="selectBook(book)">
                {{book.title}}
            </li>
        </ul>
        <book-details v-if="selectedBook" :book="selectedBook" @feedback="saveFeedback"></book-details>        
    </section>
    `,
    data() {
        return {
            term: '',
            books: [],
            selectedBook: null,
            readBooks : BookService.getBookFeedbacks()
        }
    },
    methods: {
        suggest() {
            BookService.query(this.term)
                .then( books => this.books = books)
                .catch( err => {
                    console.log(err);
                    this.books = [];
                })
        },
        selectBook(book) {
            console.log('book',book);
            this.selectedBook = book;
        },
        saveFeedback(feedback) {
            const bookFeedback = Object.assign({}, this.selectedBook, {feedback});
            BookService.saveBookFeedback(bookFeedback);
            this.selectedBook = null;
            this.readBooks = BookService.getBookFeedbacks()
        }
    },
    components: {
        BookDetails
    }    
}