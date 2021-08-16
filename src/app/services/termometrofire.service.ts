import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import Temperatura from "../models/temperatura.model";
import { environment } from "../../environments/environment.prod";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tempSensor } from "../models/temperatureSensor.model";
import { catchError } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TermometrofireService {

  private dbPath = '/temperature';
  temperaturaRef: AngularFireObject<Temperatura>;
  private url = environment.url;

  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient
  ) {
    this.temperaturaRef = db.object(this.dbPath);
  }

  getAll(): AngularFireObject<any>{
    return this.temperaturaRef;
  }

  registerTemperature(temp: tempSensor){
    return this.http.post(`${this.url}/api/dataRegister`, temp).pipe(catchError(error => {
      return throwError(error);
    }));
  }

  getTemperatures(username: string){
    const body = {
      username
    }

    return this.http.post(`${this.url}/api/getTemperatures`, body).pipe(catchError(error => {
      return throwError(error);
    }));
  }

}
