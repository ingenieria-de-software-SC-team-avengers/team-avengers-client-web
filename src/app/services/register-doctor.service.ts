import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterDoctorService {
  private url: string = 'https://project-sw1.herokuapp.com';
  constructor(private http: HttpClient) { 

  }
  register_doctor(doctor: any){
    return this.http.post(this.url + "/api/registerDoctor", doctor);
  }
}
