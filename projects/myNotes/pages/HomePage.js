import NoteService from '../services/NoteService.js'
import NotePreview from '../cmps/NotePreview.js'

export default {
    template: `
   
        <section class="notes">
        <h1>My Notes</h1> 
            <div class="head">
                <div class="left-icons">
                    <router-link to="/" style="textDecoration:none"> 
                        <button class="back" >Go back </button>
                    </router-link>    
                <button class="sort" @click="sortByP">Sort by priority </button>
                </div>
                  
                    <router-link to="/createNote" style="textDecoration:none"> 
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>   
                    </router-link>         
                    
            </div>

            <div class="container">
                <div v-for="currNote in notes">
                <note-preview :note="currNote"></note-preview>
                </div>
            </div>
           
           
            
        </section>
    
    `,
    data() {
        return {
            notes: [],
            noteToUpdate: NoteService.emptyNote(),
            priority: 'priority',
            date: 'date'
        }
    },
    created() {
        NoteService.getNotes()
            .then(notes => {
                this.notes = notes
                console.log('notes', this.notes)
            })
            .catch(err => {
                var userMsg = { txt: 'Cars Loaded Failed!', type: 'danger' }
                this.showUserMsg(userMsg);
                this.cars = []
            })
    },
    methods: {
        sortByP() {
            NoteService.sortByP(this.notes)
                .then(items => {
                    this.$router.push('/')
                })
                .catch(err => {
                    console.error('Error!');
                })
        },


    },

    components: {
        NotePreview
    }
}
