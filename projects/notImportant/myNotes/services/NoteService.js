var notes = [
    {
        id: 1,
        title: 'Best restaurants in Tel Aviv',
        text: 'Vitrina,Josepe,AbuDabi',
        img: '',
        color: 'black',
        priority: '4',
        dateOfCreation:  'December 5 2017'
    },
    {
        id: 2,
        title: 'Recipes',
        text: `Lorem ipsum dolor sit amet, an esse summo insolens usu. Sed veri mundi evertitur ne,
         ne est eripuit pertinacia. Vix nonumy ponderum principes at, iudico dissentias ei vel,
          ne soluta lobortis contentiones est. Veri aliquam duo in, vel unum nullam ex. 
          Possim commune interpretaris per et. Scripta iuvaret adipisci est in.`,
        img: '',
        color: 'black',
        priority: '3',
        dateOfCreation: 'December 4 2017'
    },
    {
        id: 3,
        title: 'Passwords',
        text: `is a pseudo-Latin text used in web design, typography, layout,
         and printing in place of English to emphasise design elements over content.
          It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.`,
        img: '',
        color: 'black',
        priority: '1',
        dateOfCreation: 'December 3 2017'
    },
    {
        id: 4,
        title: 'Passwords',
        text: `is a pseudo-Latin text used in web design, typography, layout,
         and printing in place of English to emphasise design elements over content.
          It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.`,
        img: '',
        color: 'black',
        priority: '1',
        dateOfCreation: 'December 3 2017'
    },
    {
        id: 5,
        title: 'Passwords',
        text: `is a pseudo-Latin text used in web design, typography, layout,
         and printing in place of English to emphasise design elements over content.
          It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.`,
        img: '',
        color: 'black',
        priority: '1',
        dateOfCreation: 'December 3 2017'
    },

]

function emptyNote() {
    return {
        title: '',
        text: ``,
        img: '',
        color: '',
        priority: '',
        dateOfCreation: ''
    }
}

function _getNextId() {
    var maxId = notes.reduce((acc, note) => {
        return (note.id > acc) ? note.id : acc;
    }, 0);
    return maxId + 1;
}


function getNotes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(notes) }, 1000)
    });
    return Promise.reject();
    return Promise.resolve(notes);
}

function saveNote(note) {
    return new Promise((resolve, reject) => {
        if (note.id) {
            var noteToUpdateIdx = notes.findIndex(currNote => currNote.id === note.id)
            notes.splice(noteToUpdateIdx, 1, note);
        }
        else {
            note.id = _getNextId();
            note.dateOfCreation = new Date();
            notes.push(note);
        }

        resolve()
        // reject()
    });

}


function deleteNoteChosen(noteId) {
    return new Promise((resolve, reject) => {
        var noteIdx = notes.findIndex(note => note.id === noteId)
        notes.splice(noteIdx, 1);
        resolve()
    });
}


function getNoteById(noteId) {
    return new Promise((resolve, reject) => {
        var foundNote = notes.find(note => note.id === +noteId)
        if (foundNote) resolve(foundNote)
        else reject();
    })

}


function sortByP(notes) {
   
    return new Promise((resolve, reject) => {
        notes.sort(function (a, b) {
            return a.priority - b.priority;
           
            resolve()            
        });
    });
}




export default {
    getNotes,
    deleteNoteChosen,
    emptyNote,
    _getNextId,
    saveNote,
    getNoteById,
    sortByP,

}