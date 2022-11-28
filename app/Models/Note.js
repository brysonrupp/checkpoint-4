import { generateId } from "../Utils/generateId.js"

export class Note {
    constructor(data) {
        this.id = data.id || ''
        this.task = data.task || 'no task'
        this.name = data.name || ''
        this.color = data.color || ''
        this.complete = data.complete || ''

    }


    get ListTemplate() {
        return `
    <div class="col-12 col-md-4">
      <div class="card">
      <h5 class="card-title d-flex justify-content-between mb-2">
            <span>${this.name} ${this.task}</span>
            <span>$ ${this.complete}</span>
          </h5>
          <div class="d-flex justify-content-between">
            <button onclick="app.notesController.setActiveNote('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button  class="btn btn-info"  onclick="app.notesController.setActive('${this.id}')">
            <i class="mdi mdi-pencil"></i>
            </button>
            <button onclick="app.notesController.removeNote('${this.id}')" title="Delete Task!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
    }


    // get ListTemplate() {
    //     return /*html*/`
    //     <li class="selectable" onclick="app.notesController.setActiveNote('${this.id}')">${this.name} 
    //     <div class="col-2 bg-dark">
    //     <input type="checkbox" ${this.complete ? 'checked' : ''} onchange="app.notesController.completeNote('${this.id}')"/>
    // </div>
    // </li>
    //     `
    // }

    static GetNoteFormTemplate(note) {
        if (!note) {
            note = new Note({})
        }
        return `
        <form onsubmit="app.notesController.${note.id ? `editNote('${note.id}')` : 'createNote()'}">
        <button type="submit" class="btn btn-success mt-3">Submit</button>
        </form>
        `
        // return /*html*/`
        //     <div> 
        // <button class="btn btn-danger" onclick="app.notesController.deleteNote('${this.id}')"><i class="mdi mdi-delete"></i></button>
        //   <button class="btn btn-info" onclick="app.notesController.saveNote()"><i class="mdi mdi-content-save"></i></button>
        //   <textarea class="col-8 note-save" name="" id="" cols="5" rows="5">${this.notation}</textarea>
        //   </div>
        //     `
    }

    get ComputeTitle() {
        if (this.report) {
            return this.report.slice(0, 15) + '...'
        } else {
            return 'no report'
        }
    }

}