import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myproject';


  constructor(public _auth: AuthService,private router : Router) { }

  ngOnInit(): void {
    const config = {
      apiKey: 'AIzaSyDMymHYuQEWDsc3CbciG6tfGIpes7w_ECI'
    }
    firebase.initializeApp(config)
  }
  
  onLogout(){
    this._auth.onLogout();
  }

}




