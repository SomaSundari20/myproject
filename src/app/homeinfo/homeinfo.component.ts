import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-homeinfo',
  templateUrl: './homeinfo.component.html',
  styleUrls: ['./homeinfo.component.css']
})
export class HomeinfoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'rnum', 'level', 'hname', 'hphone', 'ophone', 'place', 'refer', 'zone', 'symbol'];
  constructor(public router: Router, public dialog: MatDialog, public _info: DataService) { }
  @ViewChild(MatSort) sort: MatSort | any
  @ViewChild(MatPaginator) paginator: MatPaginator | any

  info: any
  ngOnInit(): void {
    this._info.getinfo().subscribe((res) => {
      console.log(res)
      this.info = res.data
      this.info = new MatTableDataSource(res.data)
      this.info.paginator = this.paginator
      this.info.sort = this.sort
    })
  }
  getallData() {
    this._info.getinfo().subscribe((res) => {
      console.log(res)
      this.info = res.data
    })
  }
  delete(id: any) {
    console.log(id, 'deleteid==>')
    this._info.deleteinfo(id).subscribe((res) => {
      console.log(res, 'deleteres=>')
      alert("Data Deleted Successfully..!")

    })
    this.getallData()
  }

}
