import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Database, set, ref, onValue } from '@angular/fire/database';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router: Router, public _update: DataService, public rout: ActivatedRoute) { }

  yearupdate: any[] = [];
  getparamid: any;
  ngOnInit(): void {
    this.getparamid = this.rout.snapshot.paramMap.get('id');
    this._update.getsingleupdate(this.getparamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.updateForm.patchValue({
        year: res.data[0].year,
        response: res.data[0].response,
        status: res.data[0].status,
        visit: res.data[0].visit,
        ppt: res.data[0].ppt,
        cash: res.data[0].cash,
        hname: res.data[0].hname,
        date: res.data[0].date,
      })
    })
  }

  updateForm = new FormGroup({
    year: new FormControl('', Validators.required),
    response: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    visit: new FormControl(''),
    ppt: new FormControl(''),
    cash: new FormControl(''),
    hname: new FormControl(''),
    date: new FormControl('')
  })


  Save(value: any) {
    if (this.updateForm.valid) {
      console.log(this.updateForm.value);
      this._update.createupdate(this.updateForm.value).subscribe((res: any) => {
        console.log(res)
        this.updateForm.reset()
        alert ("Saved Successfully..")
        this.router.navigate(['/homeupdate'])
      })
    }
    else {
      console.log(" Required")
    }

  }

  update() {
    console.log(this.updateForm.value, 'updated')

    if (this.updateForm.valid) {
      this._update.updateupdate(this.updateForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'resupdated..');
        alert ("Updated Successfully..")
        this.router.navigate(['/homeupdate'])
      })

    }
  }

  onBack() {
    this.router.navigate(['/homeupdate'])
  }
}
