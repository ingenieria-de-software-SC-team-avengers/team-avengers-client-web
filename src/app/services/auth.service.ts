import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user.model";
import { environment } from "../../environments/environment.prod";
import { catchError } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new Subject<any>();

  private url = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: User){
    return this.http.post(`${this.url}/api/singup`, user).pipe(catchError(error => {
      return throwError(error);
    }));
  }

  loginUser(username: string, password: string){
    const body = {
      username,
      password
    }
    return this.http.post(`${this.url}/api/singin`, body).pipe(catchError(err => {
      return throwError(err);
    }));
  }

  getUserSubject(){
    return this.userSubject;
  }

  setUserSubject(data: any){
    this.userSubject.next(data);
  }

  getInitValue(){
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
