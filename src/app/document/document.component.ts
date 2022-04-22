import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Database, set, ref, onValue } from '@angular/fire/database';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  getparamid: any;

  constructor(private router: Router, public _document: DataService, public rout: ActivatedRoute) { }



  ngOnInit(): void {
    this.getparamid = this.rout.snapshot.paramMap.get('id');
    this._document.getsingledocument(this.getparamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.documentForm.patchValue({
        name: res.data[0].name,
        url: res.data[0].url,
        date: res.data[0].date,
        school: res.data[0].school,
        place: res.data[0].place,
        rnum: res.data[0].rnum,

      })
    })
  }

  documentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    date: new FormControl(''),
    school: new FormControl('', Validators.required),
    rnum: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
  })

  Save(value: any) {
    if (this.documentForm.valid) {
      console.log(this.documentForm.value);
      this._document.createdocument(this.documentForm.value).subscribe((res: any) => {
        console.log(res)
        this.documentForm.reset()
        alert("Saved Successfully..")
        this.router.navigate(['/institution'])

      })
    }
    else {
      alert(" Required ")
    }



  }

  onBack() {
    this.router.navigate(['/homedocument'])
  }
  update() {
    console.log(this.documentForm.value, 'updated')

    if (this.documentForm.valid) {
      this._document.updatedocument(this.documentForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'resupdated..');
        alert("Updated Successfully..")
        this.router.navigate(['/institution'])

      })

    }

  }

}
