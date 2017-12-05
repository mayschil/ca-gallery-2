import BookService from '../services/BookService.js'

export default {

    template: `
            <section class="book-details" v-if="book">
                <h1>{{book.title}} <span>By {{book.author}} </span></h1>
                <h2>{{book.subtitle}}</h2>
                <h3>{{book.pageCount}} Pages</h3>
                <img :src="book.imgUrl" :alt="book.title">
                
            </section>
        `,
    created() {
        var bookId = this.$route.params.bookId;
        var book = BookService.getBookById(bookId);
        console.log('book', book)
        this.book = book;
    },
    methods: {
        emitFeedback() {
            this.$emit('feedback', this.feedback)
        }
    },
 
    data() {
        return {
            feedback: {
                txt: '',
                rating: ''
            },
            book1:null
        }
    }


}


