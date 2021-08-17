import { Component, OnInit } from '@angular/core';
import { CreateClinicService } from '../../services/create-clinic.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-clinic',
  templateUrl: './create-clinic.component.html',
  styleUrls: ['./create-clinic.component.css']
})
export class CreateClinicComponent implements OnInit {

  name: string;
  address: string;
 
  constructor(public clini_service:CreateClinicService, private router:Router) { }

  ngOnInit(): void {
  }
  post_clinic(){
    let clinic = {
      nombre: this.name,
      direccion: this.address
    };
    this.clini_service.register_clinic(clinic).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['home']);
      },
      (error: any) => {
        console.log(error.error);
      }
    )
  }
}
