

export default {

    template: `
            <section class="book-details" v-if="book">
                <h1>{{book.title}} <span>By {{book.author}} </span></h1>
                <h2>{{book.subtitle}}</h2>
                <h3>{{book.pageCount}} Pages</h3>
                <h3>Price: {{book.price}} </h3>
                <button @click="buy">Buy It</button>
                <img :src="book.imgUrl" :alt="book.title">
                <section>
                    <select v-model.number="feedback.rating">
                        <option v-for="i in 5" :value="i">{{i}}</option>
                    </select>
                    <textarea v-model="feedback.txt" placeholder="I felt..."></textarea>
                    <button @click="emitFeedback">Add!</button>
                </section>
            </section>
        `,
    created() {

    },
    methods: {
        emitFeedback() {
            this.$emit('feedback', this.feedback)
        },
        buy(){
            alert('congrats');
        }
    },
    props: ['book'],
    data() {
        return {
            feedback: {
                txt: '',
                rating: ''
            },
            book1: null
        }
    }


}


