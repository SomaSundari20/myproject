import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Router } from '@angular/router';

import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  currentToken: string | any;
  constructor(private router: Router) { }


  LoginUser(email: string, password: string) {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        this.router.navigate(['/homein'])
        this.getToken()
        alert(" Login Successfully")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        alert("Login Failed..Invalid Username or Password")
      });
  }

  getToken() {


    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        user.getIdToken().then((token: any) => {
          this.currentToken = token
        }).catch((error) => {
          console.log(error)
        })

      } else {
        // User is signed out
        // ...
      }
    });


  }

  isauthenticated() {
    return this.currentToken != null ? true : false;
  }

  onLogout() {
    this.router.navigate(['']);
    // firebase.auth().signOut();
    this.currentToken = null;
  }
}
