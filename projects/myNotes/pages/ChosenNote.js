import NoteService from '../services/NoteService.js'


export default {

    template: `
            <section class="chosen-note">
            <div class="top-left">
            <i class="fa fa-trash-o" aria-hidden="true" @click="deletNote(note.id)"></i>
            <router-link to="/" style="textDecoration:none"> 
                <button class="back-btn" >Go back </button>
             </router-link>    
             </div>


             <div class="field">
             <label class="label" >Title</label>
             <div class="control">
               <input v-model="note.title" class="input" type="text" placeholder="Text input">
             </div>
           </div>
         
           <div>
           <input  type="color" value="#000000" v-model="note.color"  autofocus>   
            </div>       
           
           <div class="field">
             <label class="label">Message</label>
             <div class="control">
               <textarea :style="{color: note.color}" class="textarea" v-model="note.text" placeholder="Textarea"></textarea>
             </div>
           </div>
           
           <div class="field">
           <label class="label">Insert image</label>
           <div class="control">
             <input class="input" type="text" placeholder="Text input"  v-model="note.img">
             <img :src="note.img">
           </div>
         </div>
           
         <div>
         Priority: <select v-model.number="note.priority">
              <option v-for="i in 5" :value="i">{{i}}</option autofocus>
             </select>
         </div>
           
           <div class="field is-grouped">
             <div class="control">
               <button class="button is-link" @click="saveNote">Submit</button>
             </div>
             <div class="control">
               <button class="button is-text">Cancel</button>
             </div>
           </div>  
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
                this.note = Object.assign({}, chosendNote)
                // this.note = chosendNote;
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


 
{/* <form class="csn-note" @submit.prevent>
<div><input type="text" v-model="note.title" autofocus placeholder='title'></div>
    
    <div><input  type="color" value="#000000" v-model="note.color" autofocus></div>
    
    <div><textarea  rows="5" cols="50" :style="{color: note.color}"  type="text" v-model="note.text" autofocus placeholder='text'> </textarea></div>           
    
    <div>Priority: <select v-model.number="note.priority">
    <option v-for="i in 5" :value="i">{{i}}</option autofocus>
</select></div>
    
    <div><img :src="note.img"></div>
    
    <button class="save-btn" @click="saveChanges">Save</button>
    
</form> */}