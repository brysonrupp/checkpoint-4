import { generateId } from "../Utils/generateId.js"

export class Note {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.completed = data.completed

  }


  get ListTemplate() {
    return `
   <div><input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.notesController.completeNote('${this.id}')"/>
   ${this.description}
   <button onclick="app.notesController.removeNote('${this.id}')" title="Delete task" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button></div>
    `
  }


  
  // get ComputeTitle() {
  //   if (this.report) {
  //     return this.report.slice(0, 15) + '...'
  //   } else {
  //     return 'no report'
  //   }

  // }


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
    // return /*html*/`
    //     <div> 
    // <button class="btn btn-danger" onclick="app.notesController.deleteNote('${this.id}')"><i class="mdi mdi-delete"></i></button>
    //   <button class="btn btn-info" onclick="app.notesController.saveNote()"><i class="mdi mdi-content-save"></i></button>
    //   <textarea class="col-8 note-save" name="" id="" cols="5" rows="5">${this.notation}</textarea>
    //   </div>
    //     `