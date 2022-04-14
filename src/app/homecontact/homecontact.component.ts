import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { DataService } from '../service/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-homecontact',
  templateUrl: './homecontact.component.html',
  styleUrls: ['./homecontact.component.css']
})
export class HomecontactComponent implements OnInit {
  displayedColumns: string[] = ['Contact Name', 'Contact Phone', 'Contact Email', 'Designation', 'status', 'Created date', 'Modify'];
  contactForm: any
  contact: any

  constructor(public router: Router, public _contact: DataService) { }

  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any ;


  ngOnInit(): void {
    this._contact.getcontact().subscribe((res: any) => {
      this.contact = new MatTableDataSource(res.data);
      this.contact.paginator = this.paginator;
      this.contact.sort = this.sort;
    });


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

