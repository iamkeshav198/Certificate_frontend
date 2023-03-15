import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

import { AddcertificateService } from 'src/app/services/addcertificate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form:any;
  alert:boolean=false

  constructor(private _addcert:AddcertificateService,private router:Router){}

  ngOnInit():void{}
  
  data = {
    ein:"",
    name:"",
    duration:"",
    dept:"",
    email:"",
    tr_name:"",
  };

  addcertiifcatecall()
  {
    console.log("inside add cert home",this.data);
    this._addcert.addcertificate(this.data).subscribe(
      data=>{console.log(data)}
      
      
    )
    // this.router.navigate(['table'])
    this.alert=true;
    
    // this._addcert.addcertificate.reset({})

  }
  closeAlert(){
    this.alert=false
    
  }
  // showSweetAlert() {
  //   Swal.fire({
  //     title: 'Hello world!',
  //     text: 'This is a sweet alert!',
  //     icon: 'success',
  //     confirmButtonText: 'Okay'
  //   });
  // }

}

