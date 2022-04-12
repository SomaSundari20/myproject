import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-homecontact',
  templateUrl: './homecontact.component.html',
  styleUrls: ['./homecontact.component.css']
})
export class HomecontactComponent implements OnInit {

  contactForm: any

  constructor(public router: Router, public _contact: DataService) { }

  contact: any

  ngOnInit(): void {

    this.getallData()


  }
  delete(id: any) {
    console.log(id, 'deleteid==>')
    this._contact.deletecontact(id).subscribe((res) => {
      console.log(res, 'deleteres=>')
      alert("Data Deleted Successfully..!")
    })
    this.getallData()
  }
  getallData() {
    this._contact.getcontact().subscribe((res) => {
      console.log(res)
      this.contact = res.data
    })
  }

  onClick() {
    this.router.navigateByUrl('/contact')

  }



}




