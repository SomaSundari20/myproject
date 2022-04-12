import { Component, OnInit } from '@angular/core';
import { Database, set, ref } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public _notes: DataService, public router: Router, public rout: ActivatedRoute) { }

  mynotes: any[] = []
  getparamid: any
  ngOnInit(): void {
    this.getparamid = this.rout.snapshot.paramMap.get('id');
    this._notes.getsinglenotes(this.getparamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.noteForm.patchValue({
        notes: res.data[0].notes,
        date: res.data[0].date,
       
      })
    })
  }

  noteForm = new FormGroup({
    notes: new FormControl('', Validators.required),
    date: new FormControl('')
  })




  Save(value: any) {
    if (this.noteForm.valid) {
      console.log(this.noteForm.value);
      this._notes.createnotes(this.noteForm.value).subscribe((res: any) => {
        console.log(res)
        this.noteForm.reset()
        alert ("Saved Successfully..")
        this.router.navigate(['/homenotes'])
      })
    }
    else {
      console.log(" Required")
    }
  }
  onBack() {
    this.router.navigate(['/homenotes'])
  }
  update() {
    console.log(this.noteForm.value, 'updated')

    if (this.noteForm.valid) {
      this._notes.updatenotes(this.noteForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'resupdated..');
        alert ("Updated Successfully..")
        this.router.navigate(['/homenotes'])
      })

    }
  }
}