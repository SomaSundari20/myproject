import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InstitutionComponent } from '../institution/institution.component';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-homeins',
  templateUrl: './homeins.component.html',
  styleUrls: ['./homeins.component.css']
})
export class HomeinsComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dialog.open(InstitutionComponent, { width: '100%', height: '100%' })
    this.router.navigate(['/homeinfo'])
  }

}
