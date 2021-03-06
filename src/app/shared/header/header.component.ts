import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: any = {};
  nameComplete: string;

  constructor(
    private router: Router
  ) {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this.nameComplete = this.userData.name;
  }

  logoutClick(){
    console.log("saliste");
  }

}
