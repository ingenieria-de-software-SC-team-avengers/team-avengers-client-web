import { Component, OnInit } from '@angular/core';
import { UserData } from "../../models/userData.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData: any = {};

  constructor(private authServices: AuthService) {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
  }

}
