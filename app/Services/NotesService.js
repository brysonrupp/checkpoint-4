import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { Pop } from "../Utils/Pop.js";
import { NotesApi } from "./AxiosService.js";


class NotesService {

   

    async createNote(noteData) {
        const res = await NotesApi.post('', noteData)
        console.log('[POST note]', res.data);
        appState.notes = [...appState.notes, new Note(res.data)]
    }

    async getNotes() {
        const res = await NotesApi.get('')
        console.log(res.data);
        appState.notes = res.data.map(n => new Note(n))
    }

    async removeNote(id) {
        const res = await NotesApi.delete(id)
        console.log('[delete note]', res.data);
        Pop.toast(res.data, 'success')
        appState.notes = appState.notes.filter(n => n.id != id)

    }
async completeNote(id) {
        let selectedNote = appState.notes.find(n => n.id == id)
        console.log('[selected]', selectedNote);
    selectedNote.completed = !selectedNote.completed
    
        const res = await NotesApi.put(id, selectedNote)
        appState.emit('notes')
    }
}



export const notesService = new NotesService()
   





//FIXME - come back to this later.
    


    
    // }

    // setActiveNote(noteId) {
    //     const foundNote = appState.notes.find(n => n.id == noteId)
    //     // console.log('found note', foundNote);
    //     appState.activeNote = foundNote
    //     // console.log('setting note', appState.activeNote);
    //     // saveState('activeNote', appState.activeNote)
    // }


    // deleteNote(noteId) {
    //     let filteredArray = appState.notes.filter(n => n.id != noteId)
    //     appState.notes = filteredArray
    //     saveState('notes', appState.notes)
    //     // appState.activeNote = null
    //     appState.activeNote = appState.activeNote
    // }


    // saveNote(newNote) {
    //     appState.activeNote.saved = new Date().toLocaleString()
    //     let activeNote = appState.activeNote
    //     activeNote.notation = newNote
    //     appState.emit('activeNote')
    //     saveState('notes', appState.notes)
    // }
    
    // async editNote(noteData, id) {
    //     const res = await axios.put('https://bcw-sandbox.herokuapp.com/api/bryson/todos/' + id, noteData)
    //     console.log('[edit note]', res.data);
    //     let index = appState.notes.findIndex(n => n.id == id)
    //     appState.notes.splice(index, 1, new Note(res.data))
    //     appState.emit('notes')
    // }

    // setActive(id) {
    //     let note = appState.notes.find(n => n.id == id)
    //     appState.activeNote = note
    //     console.log(appState.activeNote);
    // }


    // createNote(noteData) {
    //     let newNote = new Note(noteData)
    //     appState.notes = [...appState.notes, newNote]
    //     saveState('notes', appState.notes)
    //     console.log('creating note', appState.notes);
    // }