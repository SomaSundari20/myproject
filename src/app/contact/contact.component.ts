import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Database, set, ref, onValue } from '@angular/fire/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, public _contact: DataService, public rout: ActivatedRoute) { }

  getparamid: any

  mycontact: any[] = [];

  ngOnInit(): void {

    this.getparamid = this.rout.snapshot.paramMap.get('id');
    this._contact.getsinglecontact(this.getparamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.contactForm.patchValue({
        name: res.data[0].name,
        email: res.data[0].email,
        phone: res.data[0].phone,
        designation: res.data[0].designation,
        status: res.data[0].status,
        date: res.data[0].date,
        school: res.data[0].school,
        place: res.data[0].place,
        rnum: res.data[0].rnum,

      })
    })
  }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    designation: new FormControl(''),
    status: new FormControl(''),
    date: new FormControl(''),
    place: new FormControl('', Validators.required),
    school: new FormControl('', Validators.required),
    rnum: new FormControl('', Validators.required),


  })



  Save(value: any) {

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this._contact.createcontact(this.contactForm.value).subscribe((res: any) => {
        console.log(res)
        this.contactForm.reset()
        alert("Saved Successfully..")
        this.router.navigate(['/institution'])

      })
    }
    else {
      console.log(" Required")
    }

  }

  update() {
    console.log(this.contactForm.value, 'updated')

    if (this.contactForm.valid) {
      this._contact.updatecontact(this.contactForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'resupdated..');
        alert("Updated Successfully..")
        this.router.navigate(['/institution'])

      })

    }
  }

  onBack() {
    this.router.navigate(['/homecontact'])
  }


}