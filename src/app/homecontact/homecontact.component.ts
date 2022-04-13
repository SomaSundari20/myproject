import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { DataService } from '../service/data.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-homecontact',
  templateUrl: './homecontact.component.html',
  styleUrls: ['./homecontact.component.css']
})
export class HomecontactComponent implements AfterViewInit {
  displayedColumns: string[] = ['Contact Name', 'Contact Phone', 'Contact Email', 'Designation', 'Contact Status', 'Created date', 'Modify'];
  contactForm: any

  constructor(public router: Router, public _contact: DataService, public _liveAnnouncer: LiveAnnouncer) { }

  contact: any
  @ViewChild(MatSort) sort: MatSort | any;

  ngAfterViewInit() {
   
  }



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
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

