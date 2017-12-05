import NoteService from '../services/NoteService.js'


export default {
    template: `
        <section class="note">
        
         <div  class="note-div"></div>
             <div @click="goToNote(note.id)">   {{note.title}}  </div>
             </br>
         <div @click="goToNote(note.id)" class="text">  {{note.text}} </div> 
          <i class="fa fa-trash-o" aria-hidden="true" @click="deletNote(note.id)"></i> 
        </section>
    `,
    props: ['note'],
    methods: {
        deletNote(noteId) {
            NoteService.deleteNoteChosen(noteId)
            .then(res=> 
                this.$router.push('/')
            )
        },

        goToNote(noteId) {
            console.log('noteId',noteId)
            this.$router.push('/note/' + noteId);
        },
    }
}