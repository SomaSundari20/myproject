import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-homecontact',
  templateUrl: './homecontact.component.html',
  styleUrls: ['./homecontact.component.css']
})
export class HomecontactComponent implements OnInit {
  contact: any[] = [];

  constructor(public _contact: DataService) { }

  ngOnInit(): void {


    this._contact.getcontact(this.contact)
      .subscribe((res: any) => {
        console.log(res)
      }, (error) => {
        console.log(error)
      })
    this.contact.push({
    
    })

  }



}
