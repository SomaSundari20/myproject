import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  currentToken: string | any;
  constructor(private router: Router) { }
  

  LoginUser(email: string, password: string) {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['/homeinfo'])
        this.getToken()
      })
      .catch(error => {
        console.log(error)
      })
  }

  getToken() {
    firebase.auth().currentUser?.getIdToken()
      .then(
        (token: string | any) => {
          this.currentToken = token;
        }
      )
      .catch(error => {
        console.log(error)
      })
  }

  isauthenticated() {
    return this.currentToken != null ? true : false;
  }

  onLogout(){
    this.router.navigate(['']);
    firebase.auth().signOut();
    this.currentToken = null;
  }
}
