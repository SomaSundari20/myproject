
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth : AuthService, public dialog : MatDialog) { }

  loginForm : FormGroup | any;
  ngOnInit(): void {

    

    this. loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,Validators.required)
    })
  }



  onLogin() {

    
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this._auth.LoginUser(email, password)

    
  }

 

}
