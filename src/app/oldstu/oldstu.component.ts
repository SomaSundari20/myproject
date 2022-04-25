import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  batch: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Praveen', batch: 2019, status: 'H' },
  { position: 2, name: 'Chithra', batch: 2017, status: 'He' },
  { position: 3, name: 'Aaksah', batch: 2017, status: 'Li' },
  { position: 4, name: 'Aarthi', batch: 2019, status: 'Be' },
  { position: 5, name: 'BanuPriya', batch: 2018, status: 'B' },
  { position: 6, name: 'Banu', batch: 2017, status: 'C' },
  { position: 7, name: 'Niranjan', batch: 2019, status: 'N' },
  { position: 8, name: 'Hemavathi', batch: 2017, status: 'O' },
  { position: 9, name: 'Kavitha', batch: 2018, status: 'F' },
  { position: 10, name: 'Suganya', batch: 2018, status: 'Ne' },
  { position: 11, name: 'Padmesh', batch:2017, status: 'Na' },
  { position: 12, name: 'Mageshwaran', batch: 2018, status: 'Mg' },
  { position: 13, name: 'Padma', batch: 2019, status: 'Al' },
  { position: 14, name: 'Daniel', batch: 2019, status: 'Si' },
  { position: 15, name: 'Arun', batch: 2018, status: 'P' },
  { position: 16, name: 'Kala', batch: 2016, status: 'S' },
  { position: 17, name: 'Selvi', batch: 2016, status: 'Cl' },
  { position: 18, name: 'Arjun', batch: 2020, status: 'Ar' },
  { position: 19, name: 'Srinivasan', batch: 2020, status: 'K' },
  { position: 20, name: 'Sathya', batch: 2019, status: 'Ca' },
];

@Component({
  selector: 'app-oldstu',
  templateUrl: './oldstu.component.html',
  styleUrls: ['./oldstu.component.css']
})
export class OldstuComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'batch'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
  }

  @ViewChild(MatSort) sort: MatSort | any;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }



}
