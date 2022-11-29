import { Note } from "./Models/Note.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // /** @type {import('./Models/Note.js').Note|null[]} */
  //TODO - uncommenting this loadstate makes submit buttons dissapear
  /** @type {import('./Models/Inspire').Inspire|null[]} */
  inspire = null
  quote = null
  weather = null
  // notes = loadState('notes', [Note])
  /** @type {import('./Models/Note').Note[]} */
  //FIXME - added notes for listening changing from [] and null. [] makes templates dissapear
  notes = []


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
