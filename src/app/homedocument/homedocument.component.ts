import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-homedocument',
  templateUrl: './homedocument.component.html',
  styleUrls: ['./homedocument.component.css']
})
export class HomedocumentComponent implements OnInit {

  constructor(public _document: DataService,public router : Router) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  document: any
  ngOnInit(): void {

    this.getallData()
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
