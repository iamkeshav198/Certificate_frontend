import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChoiceComponent } from './components/choice/choice.component';
import { UploadComponent } from './components/upload/upload.component';
import { FilesComponent } from './components/files/files.component';
import { DisplaydataComponent } from './components/displaydata/displaydata.component';
import { DataTablesModule } from 'angular-datatables';
import { CertificateComponent } from './components/certificate/certificate.component';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ChoiceComponent,
    UploadComponent,
    FilesComponent,
    DisplaydataComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
    // jsPDF,
    // html2canvas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
