import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispdata } from '../classes/dispdata';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  baseurl: "http://localhost:9090";


  constructor(private http:HttpClient) { }
  getTraineeTable():Observable<Dispdata[]> 
  {return this.http.get<Dispdata[]>(`http://localhost:9090/certificates`);
}
 // this will return the trainee object  
 getTrainee(){ return new Dispdata(); }
}
