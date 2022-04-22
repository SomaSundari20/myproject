import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  getparamid: any;


  constructor(public router: Router, public dialog: MatDialog, public _student: DataService, public rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.getparamid = this.rout.snapshot.paramMap.get('id');
    this._student.getsinglestudent(this.getparamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.studentForm.patchValue({
        fname: res.data[0].fname,
        lname: res.data[0].lname,
        dob: res.data[0].dob,
        age: res.data[0].age,
        place: res.data[0].place,
        father: res.data[0].father,
        mother: res.data[0].mother,
        district: res.data[0].district,
        pin: res.data[0].pin,
        gender: res.data[0].gender,
        fatheroccupation: res.data[0].fatheroccupation,
        fatherphone: res.data[0].fatherphone,
        motherphone: res.data[0].motherphone,
        motheroccupation: res.data[0].motheroccupation,
        totalincome: res.data[0].totalincome,
        school: res.data[0].school,
        place2: res.data[0].place2,
        rnum: res.data[0].rnum,
        year: res.data[0].year,
        class: res.data[0].class,
        mark: res.data[0].mark,
        total: res.data[0].total,
        percent: res.data[0].percent,
        course: res.data[0].course,


      })

    })
  }


  studentForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    father: new FormControl('', Validators.required),
    mother: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    pin: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    fatheroccupation: new FormControl('', Validators.required),
    fatherphone: new FormControl('', Validators.required),
    motheroccupation: new FormControl(''),
    motherphone: new FormControl(''),
    totalincome: new FormControl('', Validators.required),
    school: new FormControl('', Validators.required),
    place2: new FormControl('', Validators.required),
    rnum: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required),
    mark: new FormControl('', Validators.required),
    total: new FormControl('', Validators.required),
    percent: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),

  })


  onBack() {
    this.dialog.closeAll()
    this.router.navigate(['/homestu'])
  }

  onSave() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      this._student.createstudent(this.studentForm.value).subscribe((res: any) => {
        console.log(res)
        alert("Saved Successfully..")
        this.studentForm.reset()
        this.router.navigate(['/homestu'])
      })
    }
    else {
      alert(" Required ")
    }
  }
  update() {

    if (this.studentForm.valid) {
      this._student.updatestudent(this.studentForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'resupdated..');
        alert("Updated Successfully..")
        this.router.navigate(['/homestu'])
      })

    }
  }
}


