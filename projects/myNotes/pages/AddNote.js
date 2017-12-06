import NoteService from '../services/NoteService.js'

export default {
    template: `
    <section class="add-note"  @submit.prevent>
        <div >
            <router-link to="/" style="textDecoration:none"> 
                <button class="back-btn" >Go back </button>
            </router-link>  
        </div>

        <div class="field">
        <label class="label" >Title</label>
        <div class="control">
          <input  v-model="noteToUpdate.title" class="input" type="text" placeholder="Text input">
        </div>
      </div>
    
      <div>
      <input  type="color" value="#000000" v-model="noteToUpdate.color"  autofocus>   
  </div>       
      
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea :style="{color: noteToUpdate.color}" class="textarea" v-model="noteToUpdate.text" placeholder="Textarea"></textarea>
        </div>
      </div>
      
      <div class="field">
      <label class="label">Insert image</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input"  v-model="noteToUpdate.img">
        <img :src="noteToUpdate.img">
      </div>
    </div>
      
    <div>
    Priority: <select v-model.number="noteToUpdate.priority">
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

{/* <form class="add-note-frm" @submit.prevent>
<div>
    <input class="input" type="text" v-model="noteToUpdate.title" autofocus placeholder='title'>
</div>
 
<div>
    <input  type="color" value="#000000" v-model="noteToUpdate.color"  autofocus>   
</div>       
<div>
    <textarea  rows="7" cols="50" :style="{color: noteToUpdate.color}" type="text" v-model="noteToUpdate.text" autofocus placeholder='text'> </textarea>
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

*/}