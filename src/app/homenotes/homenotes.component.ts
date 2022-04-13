import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-homenotes',
  templateUrl: './homenotes.component.html',
  styleUrls: ['./homenotes.component.css']
})
export class HomenotesComponent implements OnInit {

  notes: any
  constructor(public _notes: DataService) { }
  displayedColumns: string[] = ['position', 'name', 'symbol'];


  ngOnInit(): void {

    this.getallData()

  }

  delete(id: any) {
    console.log(id, 'deleteid==>')
    this._notes.deletenotes(id).subscribe((res) => {
      console.log(res, 'deleteres=>')
      alert("Data Deleted Successfully..!")

    })
    this.getallData()
  }
  getallData() {
    this._notes.getnotes().subscribe((res) => {
      console.log(res)
      this.notes = res.data
    })
  }

}
