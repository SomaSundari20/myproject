import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { InfoComponent } from './info/info.component';
import { UpdateComponent } from './update/update.component';
import { ContactComponent } from './contact/contact.component';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { HomeupdateComponent } from './homeupdate/homeupdate.component';
import { HomecontactComponent } from './homecontact/homecontact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentComponent } from './document/document.component';
import { HomedocumentComponent } from './homedocument/homedocument.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { NotesComponent } from './notes/notes.component';
import { HomenotesComponent } from './homenotes/homenotes.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MailComponent } from './mail/mail.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { HomeinComponent } from './homein/homein.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { InstitutionComponent } from './institution/institution.component';
import { StudentComponent } from './student/student.component';
import { MatListModule } from '@angular/material/list';
import { HomeinsComponent } from './homeins/homeins.component';
import { HomeinsideComponent } from './homeinside/homeinside.component';
import { HomestuComponent } from './homestu/homestu.component';
import { OldstuComponent } from './oldstu/oldstu.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    UpdateComponent,
    ContactComponent,
    HomeinfoComponent,
    HomeupdateComponent,
    HomecontactComponent,
    DocumentComponent,
    HomedocumentComponent,
    HomeComponent,
    LoginComponent,
    NotesComponent,
    HomenotesComponent,
    MailComponent,
    HomeinComponent,
    InstitutionComponent,
    StudentComponent,
    HomeinsComponent,
    HomeinsideComponent,
    HomestuComponent,
    OldstuComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    MatStepperModule,
    MatGridListModule,
    MatSortModule,
    MatListModule,
    FormsModule,
    MatPaginatorModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())

  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
