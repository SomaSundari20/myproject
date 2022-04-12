import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-homeupdate',
  templateUrl: './homeupdate.component.html',
  styleUrls: ['./homeupdate.component.css']
})
export class HomeupdateComponent implements OnInit {

  constructor(public router: Router, public _update: DataService) { }

  update: any
  ngOnInit(): void {
    this.getallData()

  }
  delete(id: any) {
    console.log(id, 'deleteid==>')
    this._update.deleteupdate(id).subscribe((res) => {
      console.log(res, 'deleteres=>')
      alert("Data Deleted Successfully..!")

    })
    this.getallData()
  }

  getallData() {
    this._update.getupdate().subscribe((res) => {
      console.log(res)
      this.update = res.data

    })
  }

  onClick() {
    this.router.navigateByUrl('/update')
  }

}
