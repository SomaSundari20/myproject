import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  myinfo: any[] = [];
  constructor(private router : Router,public _info :DataService) { }

  ngOnInit(): void {
  }

  Save(){
    this._info.saveInfo(this.myinfo)
    .subscribe((sub: any) => {
      this.router.navigate(['/homeinfo'])
      this.infoForm.reset();
   
    },
      (error: any) => {
        console.log(error)
      }
    );
  }


  infoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    cat: new FormControl('', Validators.required),
    type: new FormControl(''),
    rnum: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    hname: new FormControl('', Validators.required),
    hphone: new FormControl('', Validators.required),
    cdate: new FormControl(''),
    ophone: new FormControl('', Validators.required),
    phone: new FormControl(''),
    offemail: new FormControl('', Validators.email),
    add: new FormControl(''),
    add2: new FormControl(''),
    tds: new FormControl('', Validators.required),
    pin: new FormControl(''),
    refer: new FormControl('', Validators.required),
    referphone: new FormControl(''),
    zone: new FormControl('', Validators.required),
    long: new FormControl(''),
    lat: new FormControl(''),
    description: new FormControl(''),
    active: new FormControl('')
  })
  save() {
    const name = this.infoForm.get('name')?.value;
    const cat = this.infoForm.get('cat')?.value;
    const type = this.infoForm.get('type')?.value;
    const rnum = this.infoForm.get('rnum')?.value;
    const level = this.infoForm.get('level')?.value;
    const hname = this.infoForm.get('hname')?.value;
    const hphone = this.infoForm.get('hphone')?.value;
    const cdate = this.infoForm.get('cdate')?.value;
    const ophone = this.infoForm.get('ophone')?.value;
    const phone = this.infoForm.get('phone')?.value;
    const offemail = this.infoForm.get('offemail')?.value;
    const add = this.infoForm.get('add')?.value;
    const add2 = this.infoForm.get('add2')?.value;
    const tds = this.infoForm.get('tds')?.value;
    const pin = this.infoForm.get('pin')?.value;
    const refer = this.infoForm.get('refer')?.value;
    const referphone = this.infoForm.get('referphone')?.value;
    const zone = this.infoForm.get('zone')?.value;
    const long = this.infoForm.get('long')?.value;
    const lat = this.infoForm.get('lat')?.value;
    const description = this.infoForm.get('description')?.value;
    const active = this.infoForm.get('active')?.value;

    this.myinfo.push(
      {
        name: name, cat: cat, type: type, rnum: rnum,
        level: level, hname: hname, hphone: hphone, cdate: cdate,
        ophone: ophone, phone: phone, offemail: offemail, add: add,
        add2: add2, tds: tds, pin: pin, refer: refer,
        referphone: referphone, zone: zone, long: long, lat: lat,
        description: description, active: active
      }
    )
      this.infoForm.reset()
  }

  delete(){
    this.myinfo.pop()
  }


}