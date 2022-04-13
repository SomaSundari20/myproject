import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-homeinfo',
  templateUrl: './homeinfo.component.html',
  styleUrls: ['./homeinfo.component.css']
})
export class HomeinfoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'rnum','level','hname','hphone','ophone','place','refer' ,'zone', 'symbol'];
    constructor(public router: Router, public dialog: MatDialog, public _info: DataService) { }

  info: any
  ngOnInit(): void {
    this.getallData()
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
