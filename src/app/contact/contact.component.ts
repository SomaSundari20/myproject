import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, public _contact: DataService) { }

  mycontact: any[] = [];

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    designation: new FormControl(''),
    cname: new FormControl('', Validators.required),
    cphone: new FormControl('', Validators.required),
    cemail: new FormControl('', Validators.email),
    cstatus: new FormControl('', Validators.required),
    cdate: new FormControl('')
  })



  save() {
    const cname = this.contactForm.get('cname')?.value;
    const cemail = this.contactForm.get('cemail')?.value;
    const designation = this.contactForm.get('designation')?.value;
    const cphone = this.contactForm.get('cphone')?.value;
    const cstatus = this.contactForm.get('cstatus')?.value;
    const cdate = this.contactForm.get('cdate')?.value;


    this.mycontact.push(
      {
        cname: cname,
        cemail: cemail,
        designation: designation,
        cphone: cphone,
        cstatus: cstatus,
        cdate: cdate
      }
    )
    this.contactForm.reset();
  }
  Save() {
    this._contact.saveContact(this.mycontact)
      .subscribe((sub: any) => {
        this.router.navigate(['/homecontact'])
        this.contactForm.reset();
     
      },
        (error: any) => {
          console.log(error)
        }
      );
  }

  delete() {
    this.mycontact.pop()
  }
}
