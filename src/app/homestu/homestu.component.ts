import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-homestu',
  templateUrl: './homestu.component.html',
  styleUrls: ['./homestu.component.css']
})
export class HomestuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dialog.open(StudentComponent, { width: '2000px', height: '800px' })

  }
}
