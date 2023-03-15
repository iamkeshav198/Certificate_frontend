import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './components/certificate/certificate.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { DisplaydataComponent } from './components/displaydata/displaydata.component';
import { FilesComponent } from './components/files/files.component';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{
  path: '',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path: 'choice',
  component:ChoiceComponent,
  pathMatch:'full'
},
{
  path: 'upload',
  component:UploadComponent,
  pathMatch:'full'
},
{
  path: 'certificate',
  component:CertificateComponent,
  pathMatch:'full'
},
{
  path: 'home',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path: 'files',
  component:FilesComponent,
  pathMatch:'full'
},
{
  path: 'table',
  component:DisplaydataComponent,
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
