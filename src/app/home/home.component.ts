import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MailComponent } from '../mail/mail.component';


interface School {
  name: string;
  disc: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }
  schoolControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  fileName: string | any

  ngOnInit(): void {

  }

  onClick() {
    this.dialog.open(MailComponent, { width: '1000px', height: ' 800px' })
    this.router.navigate(['/mail'])
  }

  school: School[] = [
    { name: '2016', disc: ['Tirunelveli'] },
    { name: '2017', disc: ['Tirunelveli'] },
    { name: '2018', disc: ['Tirunelveli', 'chennai'] },
    { name: '2019', disc: ['Tirunelveli', 'Madurai'] },
  ];
}
