import { NotesKey } from "../types/data"

const max_notes = 20

export const ConverterToAbc = (arr_notes: NotesKey[]) => {
  // abc format
  const notes_string = arr_notes.map(note => {
    if (Array.isArray(note)) {
      return `[${note.join(' ')}]`
    }
    return note
  }).join(' ')

  // break
  const notes_array = notes_string.split(' ')
  let result = ''
  for (let i = 0; i < notes_array.length; i += max_notes) {
    result += notes_array.slice(i, i + max_notes).join(' ') + ' |\n'
  }

  // end
  result = result.trim().slice(0, -1) + '|]'
  
  return result
}
