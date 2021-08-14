import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import Temperatura from "../models/temperatura.model";

@Injectable({
  providedIn: 'root'
})
export class TermometrofireService {

  private dbPath = '/temperature';
  temperaturaRef: AngularFireObject<Temperatura>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.temperaturaRef = db.object(this.dbPath);
  }

  getAll(): AngularFireObject<any>{
    return this.temperaturaRef;
  }

}
