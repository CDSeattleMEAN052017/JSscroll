import { Component, OnInit } from '@angular/core';
import{ Note } from './Note'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[]
  newNote: Note = new Note
  chosen_note: Note
  constructor() { }

  ngOnInit() {
    this.notes = [
     {_id: Math.floor(Math.random()*100), note: "New Note", created_at: Date.now(), updated_at: Date.now()},
     {_id: Math.floor(Math.random()*100), note: "Second Note", created_at: Date.now(), updated_at: Date.now()},
     {_id: Math.floor(Math.random()*100), note: "Third Note", created_at: Date.now(), updated_at: Date.now()}
    ]
  }
  createNote(): void{
    this.notes.push(this.newNote)
    this.newNote = new Note
  }
  
  showNote(note: Note): void{
    console.log ('picked note')
    if(this.chosen_note != note){
      this.chosen_note = note
    } 
    else{
      this.chosen_note = undefined
    }
  }

  update_note(editnote: Note): void{
    for(let key in editnote){
      this.chosen_note[key] = editnote[key]
    }
    this.chosen_note = undefined
  }
  
  
  deleteNote(i): void{
    this.notes.splice(i)
  }
}
