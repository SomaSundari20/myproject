import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  mydocument: any[] = [];

  constructor(private router:Router,public _document:DataService) { }



  ngOnInit(): void {
  }

  documentForm = new FormGroup({
    dname: new FormControl('', Validators.required),
    durl: new FormControl('', Validators.required),
    cdate: new FormControl('')
  })

  Save(){
    this._document.saveDocument(this.mydocument)
    .subscribe((sub: any) => {
      this.router.navigate(['/homedocument'])
      this.documentForm.reset();
      
    },
      (error: any) => {
        console.log(error)
      }
    );
  }

  save() {
    
    const dname = this.documentForm.get('dname')?.value;
    const durl = this.documentForm.get('durl')?.value;
    const cdate = this.documentForm.get('cdate')?.value;

    this.mydocument.push(
      {
        dname : dname,
        durl : durl,
        cdate : cdate
      }
    )

    this.documentForm.reset()  }

  delete(){
    this.mydocument.pop()
  }

}
