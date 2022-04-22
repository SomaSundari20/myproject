import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionComponent } from '../institution/institution.component';
import { DataService } from '../service/data.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-homeins',
  templateUrl: './homeins.component.html',
  styleUrls: ['./homeins.component.css']
})



export class HomeinsComponent implements OnInit {
  getparamid: any;
  getparamid1: any;
  infoForm = new FormGroup({
    name: new FormControl(''),
    rnum: new FormControl(''),
    tds: new FormControl(''),
    hname: new FormControl(''),

  })
  @ViewChild(MatSort) sort: MatSort | any;
  constructor(public _info: DataService, public router: Router, public rout: ActivatedRoute, public _student: DataService) { }
  student: any
  totalincome: any
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'mark', 'percent', 'income']
  ngOnInit(): void {

    this.getparamid1 = this.rout.snapshot.paramMap.get('rnum');
    this._student.getschoolstudent(this.getparamid1).subscribe((res) => {
      console.log(res, 'res==>');
      this.student = new MatTableDataSource(res.data);


    })

  }

  onClick() {
    this.student.sort = this.sort

  }
  onBack() {
    this.router.navigate(['/homein'])
  }


}
