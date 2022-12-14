import { appState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { notesService } from "../Services/NotesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawNotes() {
    const notes = appState.notes
    let template = ''
    notes.forEach(n => template += n.ListTemplate)
    setHTML('notes', template)
}








function _drawNotesCount() {
    let incomplete = appState.notes.filter(i => i.completed == false).length
    setHTML('incomplete', incomplete)
}

export class NotesController {
    constructor() {
        appState.on('notes', _drawNotes)

        appState.on('notes', _drawNotesCount)
        this.getNotes()


    }


    async getNotes() {
        try {
            await notesService.getNotes()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
    async removeNote(id) {
        try {
            console.log('deleting', id);
            if (await Pop.confirm('do you want to delete this note?')) {
                await notesService.removeNote(id)
            }
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }


    async completeNote(id) {
        try {
            await notesService.completeNote(id)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async createNote() {
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        console.log(formData)
        await notesService.createNote(formData)
        form.reset()
    }

}









    // setActive(id) {
    //     notesService.setActive(id)
    // }

    // async editCar(id) {
    //     try {
    //         window.event.preventDefault()
    //         const form = window.event.target
    //         const noteData = getFormData(form)
    //         console.log('editing', form);
    //         await notesService.editNote(noteData, id)
    //         Pop.toast('edited', 'info')
    //         form.reset()
    //     } catch (error) {
    //         Pop.error(error.message)
    //         console.error(error)
    //     }
    // }


//FIXME - might need to come back to this commenting out for now
// function _drawActiveNote() {
//     console.log('drawing active note', appState.activeNote);
//     if (appState.activeNote) {
//         let activeNote = appState.activeNote
//         setHTML('current-note', activeNote.ActiveTemplate)
//     }
    //FIXME - commenting out for now
    //     saveNote() {
    //         // window.event.preventDefault()
    //         let newNote = document.querySelector('.note-save')

    //         notesService.saveNote(newNote.value)
    //         console.log(newNote, 'saving note');

    //     }



