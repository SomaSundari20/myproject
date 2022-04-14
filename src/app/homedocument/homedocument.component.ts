import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-homedocument',
  templateUrl: './homedocument.component.html',
  styleUrls: ['./homedocument.component.css']
})
export class HomedocumentComponent implements OnInit {

  constructor(public _document: DataService, public router: Router) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  document: any
  ngOnInit(): void {
    this._document.getdocument().subscribe((res: any) => {
      console.log(res)
      this.document = new MatTableDataSource(res.data);
      this.document.paginator = this.paginator;
      this.document.sort = this.sort;
    })

  }
  delete(id: any) {
    console.log(id, 'deleteid==>')
    this._document.deletedocument(id).subscribe((res) => {
      console.log(res, 'deleteres=>')
      alert("Data Deleted Successfully..!")

    })
    this.getallData()
  }

  getallData() {
    this._document.getdocument().subscribe((res) => {
      console.log(res)
      this.document = res.data
    })
  }


}
