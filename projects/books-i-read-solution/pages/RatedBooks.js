import BookService from '../services/BookService.js'


export default {
    template: `
<section v-if="readBooks.length">

            Books I Read:
            <ul >
            
                <li v-for="book in readBooks">
                <i @click="deletBook(book.id)" class="fa fa-trash-o" aria-hidden="true"> </i>
                 <span @click="goToBook(book.id)">  {{book.title}} </span>
                    <p>Feedback: {{book.feedback.txt}}</p>
                    <p>Feedback: {{book.feedback.rating}}</p>
                </li>
            </ul>
        </section>
    
 `,

    created() {
    },
    data() {
        return {
            readBooks: BookService.getBookFeedbacks()
        }
    },

    methods: {
        goToBook(bookId) {
            console.log('bookId', bookId)
            this.$router.push('/books-i-read/' + bookId);
        },
        deletBook(bookId) {
            console.log('bookId',bookId)
            BookService.deleteBookChosen(bookId);
            this.readBooks = BookService.getBookFeedbacks()
        }


    }
}