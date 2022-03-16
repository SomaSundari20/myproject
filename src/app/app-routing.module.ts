import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { HomecontactComponent } from './homecontact/homecontact.component';
import { HomedocumentComponent } from './homedocument/homedocument.component';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { HomenotesComponent } from './homenotes/homenotes.component';
import { HomeupdateComponent } from './homeupdate/homeupdate.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  
  
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'homeinfo',component:HomeinfoComponent},
  {path:'homeupdate',component:HomeupdateComponent},
  {path:'homecontact',component:HomecontactComponent},
  {path:'homedocument',component:HomedocumentComponent},
  {path:'homenotes',component:HomenotesComponent},
  {path:'info',component:InfoComponent},
  {path:'contact',component:ContactComponent},
  {path:'update',component:UpdateComponent},
  {path:'document',component:DocumentComponent},
  {path:'notes',component:NotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
