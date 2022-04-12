import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //   const tk = this._auth.getToken();
  //   return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/info/data.json", info)
  // }
  // saveNote(note: any[]) {
  //   const tk = this._auth.getToken();
  //   return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/notes/data.json", note)
  // }
  // create data
  createData(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public _httpClient: HttpClient, public _auth: AuthService, public http: HttpClient) { }
  apiUrlinfo = 'http://localhost:3000/info'
  apiUrlnotes = 'http://localhost:3000/notes'
  apiUrlcontact = 'http://localhost:3000/contact'
  apiUrldocument = 'http://localhost:3000/document'
  apiUrlupdate = 'http://localhost:3000/tableupdate'

  // saveContact(contact: any[]) {
  //   const tk = this._auth.getToken();
  //   return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/contact/data.json", contact)
  // }
  // saveDocument(document: any[]) {
  //   const tk = this._auth.getToken();
  //   return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/document/data.json", document)
  // }
  // saveUpdate(update: any[]) {
  //   const tk = this._auth.getToken();
  //   return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/update/data.json", update)
  // }
  // saveInfo(info: any[]) {
  //   const tk = this._auth.getToken();
  //   return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/info/data.json", info)
  // }
  // saveNote(note: any[]) {
  //   const tk = this._auth.getToken();
  //   return this._httpClient.post("https://httpsignup-69c32-default-rtdb.firebaseio.com/notes/data.json", note)
  // }

  // create data

  createinfo(data: any): Observable<any> {
    console.log(data, 'createapi=>')
    return this._httpClient.post(`${this.apiUrlinfo}`, data);
  }
  createdocument(data: any): Observable<any> {
    console.log(data, 'createapi=>')
    return this._httpClient.post(`${this.apiUrldocument}`, data);
  }
  createnotes(data: any): Observable<any> {
    console.log(data, 'createapi=>')
    return this._httpClient.post(`${this.apiUrlnotes}`, data);
  }
  createcontact(data: any): Observable<any> {
    console.log(data, 'createapi=>')
    return this._httpClient.post(`${this.apiUrlcontact}`, data);
  }
  createupdate(data: any): Observable<any> {
    console.log(data, 'createapi=>')
    return this._httpClient.post(`${this.apiUrlupdate}`, data);
  }


  //get all data

  getcontact(): Observable<any> {
    return this._httpClient.get(`${this.apiUrlcontact}`);
  }

  getdocument(): Observable<any> {
    return this._httpClient.get(`${this.apiUrldocument}`)
  }

  getupdate(): Observable<any> {
    return this._httpClient.get(`${this.apiUrlupdate}`)
  }

  getnotes(): Observable<any> {
    return this._httpClient.get(`${this.apiUrlnotes}`)
  }
  getinfo(): Observable<any> {
    return this._httpClient.get(`${this.apiUrlinfo}`)
  }

  // delete data

  deletecontact(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.delete(`${this.apiUrlcontact}/${ids}`);
  }

  deletedocument(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.delete(`${this.apiUrldocument}/${ids}`);
  }
  deletenotes(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.delete(`${this.apiUrlnotes}/${ids}`);
  }
  deleteupdate(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.delete(`${this.apiUrlupdate}/${ids}`);
  }
  deleteinfo(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.delete(`${this.apiUrlinfo}/${ids}`);
  }


  // get single data


  getsingleinfo(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.get(`${this.apiUrlinfo}/${ids}`);
  }
  getsinglecontact(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.get(`${this.apiUrlcontact}/${ids}`);
  }
  getsingleupdate(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.get(`${this.apiUrlupdate}/${ids}`);
  }
  getsinglenotes(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.get(`${this.apiUrlnotes}/${ids}`);
  }
  getsingledocument(id: any): Observable<any> {
    let ids = id;
    return this._httpClient.get(`${this.apiUrldocument}/${ids}`);
  }


  //update data
  updateinfo(data: any, id: any): Observable<any> {
    let ids = id;
    return this._httpClient.put(`${this.apiUrlinfo}/${ids}`, data)
  }
  updateupdate(data: any, id: any): Observable<any> {
    let ids = id;
    return this._httpClient.put(`${this.apiUrlupdate}/${ids}`, data)
  } updatedocument(data: any, id: any): Observable<any> {
    let ids = id;
    return this._httpClient.put(`${this.apiUrldocument}/${ids}`, data)
  } updatenotes(data: any, id: any): Observable<any> {
    let ids = id;
    return this._httpClient.put(`${this.apiUrlnotes}/${ids}`, data)
  } updatecontact(data: any, id: any): Observable<any> {
    let ids = id;
    return this._httpClient.put(`${this.apiUrlcontact}/${ids}`, data)
  }

  httpPost(url: string, { }: any) {
    return this.http.post(url, { name: "somu" });
  }

  sendEmail(url: string, data: any) {
    return this.http.post(url, data)
  }
}
