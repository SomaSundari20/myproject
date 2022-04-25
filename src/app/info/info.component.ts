import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  getparamid: any;
  constructor(public router: Router, public rout: ActivatedRoute, public _info: DataService) { }


  infoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cat: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    rnum: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    hname: new FormControl('', Validators.required),
    hphone: new FormControl(''),
    academic: new FormControl('', Validators.required),
    ophone: new FormControl(''),
    phone: new FormControl(''),
    offemail: new FormControl('', Validators.required),
    add1: new FormControl(''),
    add2: new FormControl(''),
    tds: new FormControl('', Validators.required),
    pin: new FormControl('', Validators.required),
    refer: new FormControl(''),
    referphone: new FormControl(''),
    zone: new FormControl('', Validators.required),
    longtitude: new FormControl(''),
    latitude: new FormControl(''),
    description: new FormControl(''),
    active: new FormControl('')
  })



  ngOnInit(): void {
    this.getparamid = this.rout.snapshot.paramMap.get('id');
    this._info.getsingleinfo(this.getparamid).subscribe((res) => {
      console.log(res, 'res==>');
      this.infoForm.patchValue({
        name: res.data[0].name,
        cat: res.data[0].cat,
        type: res.data[0].type,
        rnum: res.data[0].rnum,
        level: res.data[0].level,
        hname: res.data[0].hname,
        hphone: res.data[0].hphone,
        academic: res.data[0].academic,
        ophone: res.data[0].ophone,
        phone: res.data[0].phone,
        offemail: res.data[0].offemail,
        add1: res.data[0].add1,
        add2: res.data[0].add2,
        tds: res.data[0].tds,
        pin: res.data[0].pin,
        refer: res.data[0].refer,
        referphone: res.data[0].referphone,
        zone: res.data[0].zone,
        longtitude: res.data[0].longtitude,
        latitude: res.data[0].latitude,
        description: res.data[0].description,
        active: res.data[0].active,

       
      })
    })

  }
  Save(value: any) {
    if (this.infoForm.valid) {
      console.log(this.infoForm.value);
      this._info.createinfo(this.infoForm.value).subscribe((res: any) => {
        console.log(res)
        this.infoForm.reset()
        alert ("Saved Successfully..")
        this.router.navigate(['/institution'])
      })
    }
    else {
      alert(" Required ")
    }

  }
  update() {
    console.log(this.infoForm.value, 'updated')

    if (this.infoForm.valid) {
      this._info.updateinfo(this.infoForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'resupdated..');
        alert ("Updated Successfully..")
        this.router.navigate(['/institution'])
    
      })

    }

  }



  onBack() {
    this.router.navigate(['/homeinfo'])
  }


}
