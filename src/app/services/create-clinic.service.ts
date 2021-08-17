import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateClinicService {

  private url: string = 'https://project-sw1.herokuapp.com';
  constructor( private http:HttpClient) { 

  }

  register_clinic(clinic: any){
    return this.http.post(this.url + "/api/registerClinic", clinic);
  }
}
