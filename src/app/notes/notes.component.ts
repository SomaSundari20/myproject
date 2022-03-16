import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public _notes: DataService, public router: Router) { }

  mynotes: any[] = []

  ngOnInit(): void {
  }

  noteForm = new FormGroup({
    notes: new FormControl('', Validators.required),
    date: new FormControl('')
  })

  save() {
    const notes = this.noteForm.get('notes')?.value;
    const date = this.noteForm.get('date')?.value;

    this.mynotes.push(
      {
        notes: notes,
        date: date
      }
    )
    this.noteForm.reset()
  }
  delete() {
    this.mynotes.pop()
  }

  Save() {
    this._notes.saveNote(this.mynotes)
    .subscribe((sub: any) => {
      this.router.navigate(['/homenotes'])
      this.noteForm.reset();
      
    },
      (error: any) => {
        console.log(error)
      }
    );
  }

}
