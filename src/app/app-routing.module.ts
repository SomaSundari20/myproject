import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { HomecontactComponent } from './homecontact/homecontact.component';
import { HomedocumentComponent } from './homedocument/homedocument.component';
import { HomeinComponent } from './homein/homein.component';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { HomeinsComponent } from './homeins/homeins.component';
import { HomeinsideComponent } from './homeinside/homeinside.component';
import { HomenotesComponent } from './homenotes/homenotes.component';
import { HomestuComponent } from './homestu/homestu.component';
import { HomeupdateComponent } from './homeupdate/homeupdate.component';
import { InfoComponent } from './info/info.component';
import { InstitutionComponent } from './institution/institution.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotesComponent } from './notes/notes.component';
import { OldstuComponent } from './oldstu/oldstu.component';
import { StudentComponent } from './student/student.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [


  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homeinfo', component: HomeinfoComponent },
  { path: 'homeupdate', component: HomeupdateComponent },
  { path: 'homecontact', component: HomecontactComponent },
  { path: 'homedocument', component: HomedocumentComponent },
  { path: 'homenotes', component: HomenotesComponent },
  { path: 'info', component: InfoComponent },
  { path: 'info/:id', component: InfoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'document/:id', component: DocumentComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/:id', component: NotesComponent },
  { path: 'mail', component: MailComponent },
  { path: 'homein', component: HomeinComponent },
  { path: 'institution', component: InstitutionComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'homeinside', component: HomeinsideComponent },
  { path: 'homeins', component: HomeinsComponent },
  { path: 'homestu', component: HomestuComponent },
  { path: 'old', component: OldstuComponent },
  // { path: 'homeins/:id', component: HomeinsComponent },
  { path: 'homeins/:rnum', component: HomeinsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
