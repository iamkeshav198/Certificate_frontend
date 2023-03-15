import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddcertificateService {
  baseurl="http://localhost:9090"

  constructor(private _http:HttpClient) { }
  addcertificate(data:any){
    return this._http.post(`${this.baseurl}/certificates`,data);

  }
}
