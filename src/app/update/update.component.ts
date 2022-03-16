import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router : Router,public _update : DataService) { }

  yearupdate : any[] =[] ;
  ngOnInit(): void {
  }

  updateForm = new FormGroup({
    year : new FormControl('',Validators.required),
    response : new FormControl('',Validators.required),
    process : new FormControl('',Validators.required),
    visited : new FormControl(''),
    ppt : new FormControl(''),
    cash : new FormControl(''),
    hname : new FormControl(''),
    cdate : new FormControl('')
  })
  delete(){
    this.yearupdate.pop()
  }

  Save(){
    this._update.saveUpdate(this.yearupdate)
    .subscribe((sub: any) => {
      this.router.navigate(['/homeupdate'])
      this.updateForm.reset();
   
    },
      (error: any) => {
        console.log(error)
      }
    );
  }
  save(){
    const year = this.updateForm.get('year')?.value;
    const response = this.updateForm.get('response')?.value;
    const process = this.updateForm.get('process')?.value;
    const visited = this.updateForm.get('visited')?.value;
    const ppt = this.updateForm.get('ppt')?.value;
    const cash = this. updateForm.get ('cash')?.value;
    const hname = this. updateForm.get('hname')?.value;
    const cdate = this.updateForm.get('cdate')?.value;

    this.yearupdate.push({
      year : year,
      response :response,
      process : process,
      visited : visited ,
      ppt : ppt ,
      cash : cash,
      hname : hname,
      cdate : cdate
    })
    this.updateForm.reset()
    
  }
}
