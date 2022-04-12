import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UpdateComponent } from '../update/update.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _httpClient : HttpClient ,public _auth:AuthService) { }

 saveContact(contact : any[]){
   const tk = this._auth.getToken();
   return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/contact/data.json",contact)
 }
 saveDocument(document : any[]){
  const tk = this._auth.getToken();
  return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/document/data.json",document)
}
saveUpdate(update : any[]){
  const tk = this._auth.getToken();
  return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/update/data.json",update)
}
saveInfo(info : any[]){
  const tk = this._auth.getToken();
  return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/info/data.json",info)
}
saveNote(note : any[]){
  const tk = this._auth.getToken();
  return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/notes/data.json",note)
}
getcontact(contact : any[]){
  const tk = this._auth.getToken();
  return this._httpClient.get("https://httpsignup-69c32-default-rtdb.firebaseio.com/contact/data.json? auth="+tk)
}
}
