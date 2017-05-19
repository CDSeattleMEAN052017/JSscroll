import { Component, OnInit, Output, OnChanges, EventEmitter, Input } from '@angular/core';
import { Note } from "./../Note"

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  @Input() this_note : Note;
  @Output() save = new EventEmitter;
  edit_note: Note

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log("on changes!!!!!!!!!!!!!!!")
    this.edit_note = {_id:this.this_note._id, note: this.this_note.note, created_at: this.this_note.created_at, updated_at: Date.now()}
  }
  save_note(){
    console.log('save')
    this.save.emit(this.edit_note)
  }
}
