import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../service/data.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-homestu',
  templateUrl: './homestu.component.html',
  styleUrls: ['./homestu.component.css']
})
export class HomestuComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  document: any
  constructor(public dialog: MatDialog, public _student: DataService) { }
  displayedColumns: string[] = ['position',  'rnum', 'school', 'weight','name', 'place', 'symbol'];


  ngOnInit(): void {
    this._student.getstudent().subscribe((res: any) => {
      console.log(res)
      this.document = new MatTableDataSource(res.data);
      this.document.paginator = this.paginator;
      this.document.sort = this.sort;
    })
  }

  delete(id: any) {
    console.log(id, 'deleteid==>')
    this._student.deletestudent(id).subscribe((res) => {
      console.log(res, 'deleteres=>')
      alert("Data Deleted Successfully..!")

    })

  }
  onClick() {
    this.dialog.open(StudentComponent, { width: '2000px', height: '800px' })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.document.filter = filterValue.trim().toLowerCase();
  }
}
