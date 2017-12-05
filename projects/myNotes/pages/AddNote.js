import NoteService from '../services/NoteService.js'

export default {
    template: `
    <section class="add-note">
        <div >
            <router-link to="/" style="textDecoration:none"> 
                <button class="back-btn" >Go back </button>
            </router-link>  
        </div>

          
        <form @submit.prevent>
            <div>
                <input class="input" type="text" v-model="noteToUpdate.title" autofocus placeholder='title'>
            </div>
             
            <div>
                <input  type="color" value="#000000" v-model="noteToUpdate.color"  autofocus>   
            </div>       
            <div>
                <textarea  rows="5" cols="50" :style="{color: noteToUpdate.color}" type="text" v-model="noteToUpdate.text" autofocus placeholder='text'> </textarea>
            </div>
            
            <div>
            Priority: <select v-model.number="noteToUpdate.priority">
                 <option v-for="i in 5" :value="i">{{i}}</option autofocus>
                </select>
            </div>
            <div>
                <input class="input" v-model="noteToUpdate.img" type="text" name="pic" placeholder='insert img'>
                <img :src="noteToUpdate.img">
            </div>
            
        </form>
        <button class="save-btn" @click="saveNote">Save</button>
    </section>
    `,
    data() {
        return {
            noteToUpdate: NoteService.emptyNote(),
        }
    },
    methods: {
        saveNote() {
            console.log('noteToUpdate', this.noteToUpdate)
            NoteService.saveNote(this.noteToUpdate)
                .then(addedNote => {
                    this.$router.push('/')
                })
                .catch(err => {
                    console.error(err);
                })
        },
    }
}