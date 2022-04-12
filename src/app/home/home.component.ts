import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MailComponent } from '../mail/mail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }


   fileName : string |any

  ngOnInit(): void {
  
  }

  onClick() {
    this.dialog.open(MailComponent, { width: '1000px', height: ' 800px' })
    this.router.navigate(['/mail'])
  }
}
