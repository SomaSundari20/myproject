import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { initializeApp } from 'firebase/app';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myproject';
  Today = new Date()

  constructor(public _auth: AuthService, private router: Router, public dialog: MatDialog) { }
  @ViewChild(MatSidenav)
  sidenav !: MatSidenav
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyDMymHYuQEWDsc3CbciG6tfGIpes7w_ECI",
      authDomain: "httpsignup-69c32.firebaseapp.com",
      databaseURL: "https://httpsignup-69c32-default-rtdb.firebaseio.com",
      projectId: "httpsignup-69c32",
      storageBucket: "httpsignup-69c32.appspot.com",
      messagingSenderId: "346615725380",
      appId: "1:346615725380:web:28a261a3568a2d06092b11"
    };

    const app = initializeApp(firebaseConfig)

  }


  oninstitution() {
    this.router.navigate(['/homeins'])
  }
  onhome() {
    this.router.navigate(['/homein'])
  }
  onstudent() {
    this.router.navigate(['/homestu'])
  }

  onLogout() {
    this._auth.onLogout();
  }

  onlogin() {
    // this.dialog.open(LoginComponent)
    this.router.navigate(['/login'])
  }

  toggle(nav: any) {
    if (nav.opened) {
      nav.close()
    }
    else {
      nav.open()
    }
  }
}




