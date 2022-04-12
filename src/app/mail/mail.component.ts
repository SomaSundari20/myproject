import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Database, set, ref, onValue } from '@angular/fire/database';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router, public http: DataService, public database: Database) { }


  ngOnInit(): void { }
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    Place: new FormControl('', Validators.required),
    Message: new FormControl('', Validators.required),
  })

  register(value: any) {
    set(ref(this.database, 'mailForm/' + value.name), {
      name: value.name,
      phone: value.phone,
      email: value.email,
      Place: value.Place,
      Message: value.Message,
    });
    alert("Form Submitted Successfully..!")
    let user = {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user)
      .subscribe(data => {
        let res: any = data;
        console.log(
          ` ${user.name} is registered successfully...`
        )
        this.router.navigate([''])
      },
        (error: any) => {
          console.log(error)
        },
      )
  }

  onBack() {
    this.dialog.closeAll();
    this.router.navigate([''])
  }
}
