import NoteService from '../services/NoteService.js'


export default {

    template: `
            <section class="chosen-note">
                <router-link to="/" style="textDecoration:none"> 
                    <button class="back-btn" >Go back </button>
                 </router-link>    
                <form class="csn-note" @submit.prevent>
                <div><input type="text" v-model="note.title" autofocus placeholder='title'></div>
                    
                    <div><input  type="color" value="#000000" v-model="note.color" autofocus></div>
                    
                    <div><textarea :style="{color: note.color}"  type="text" v-model="note.text" autofocus placeholder='text'> </textarea></div>           
                    
                    <div>Priority: <select v-model.number="note.priority">
                    <option v-for="i in 5" :value="i">{{i}}</option autofocus>
                </select></div>
                    
                    <div><img :src="note.img"></div>
                    
                    <button class="save-btn" @click="saveChanges">Save</button>
                    <i class="fa fa-trash-o" aria-hidden="true" @click="deletNote(note.id)"></i>
                </form>
            </section>
        `,
    data() {
        return {
            note: null,

        }
    },
    created() {
        var noteId = this.$route.params.noteId;
        NoteService.getNoteById(noteId)
            .then(chosendNote => {
                this.note = chosendNote;
            })
    },
    methods: {
        saveChanges() {
            NoteService.saveNote(this.note)
                .then(addedNote => {
                    this.$router.push('/')
                })
                .catch(err => {
                    console.error(err);
                })
        },
        deletNote(noteId) {
            console.log('noteId', noteId)
            NoteService.deleteNoteChosen(noteId)
                .then(res =>
                    this.$router.push('/')
                )
        },
    },


}