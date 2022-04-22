import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-homeinside',
  templateUrl: './homeinside.component.html',
  styleUrls: ['./homeinside.component.css']
})
export class HomeinsideComponent implements OnInit {
  displayedColumns: string[] = ['rnum', 'position', 'area', 'place', 'name',];
  document: any
  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  student: any;
  constructor(public _document: DataService) { }

  ngOnInit(): void {
    this._document.getinfo().subscribe((res: any) => {
      console.log(res)
      this.document = new MatTableDataSource(res.data);
      this.document.paginator = this.paginator;
      this.document.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.document.filter = filterValue.trim().toLowerCase();
  }

  onGenerate() {
    this.document.sort = this.sort
  }

}
