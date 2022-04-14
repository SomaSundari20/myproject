import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-homenotes',
  templateUrl: './homenotes.component.html',
  styleUrls: ['./homenotes.component.css']
})
export class HomenotesComponent implements OnInit {

  notes: any
  constructor(public _notes: DataService) { }
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  @ViewChild(MatSort) sort: Sort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any

  ngOnInit(): void {
    this._notes.getnotes().subscribe((res) => {
      console.log(res)
      this.notes = new MatTableDataSource(res.data)
      this.notes.paginator = this.paginator;
      this.notes.sort = this.sort;
    })

  }

  delete(id: any) {
    console.log(id, 'deleteid==>')
    this._notes.deletenotes(id).subscribe((res) => {
      console.log(res, 'deleteres=>')
      alert("Data Deleted Successfully..!")

    })
    this.getallData()
  }
  getallData() {
    this._notes.getnotes().subscribe((res) => {
      console.log(res)
      this.notes = res.data
    })
  }

}
