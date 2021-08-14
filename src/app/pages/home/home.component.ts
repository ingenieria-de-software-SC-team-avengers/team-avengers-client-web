import { Component, OnInit } from '@angular/core';
import { UserData } from "../../models/userData.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData: UserData;

  constructor() { }

  ngOnInit(): void {
    this.recuperarUser();
  }

  recuperarUser(){

  }

}
