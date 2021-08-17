import { Component, OnInit } from '@angular/core';
import { RegisterDoctorService } from '../../services/register-doctor.service';
import { Router } from '@angular/router';
import { routes } from '../../auth/auth-routing.module';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {
  name: string;
  code: string;
  specialty: string;
  id_clinic: number;
  cellphone: number;
  constructor( public doctor_service: RegisterDoctorService, private router: Router) { }

  ngOnInit(): void {
  }
  post_doctor(){
    let doctor = {
      nombre: this.name,
      matricula: this.code,
      especialidad: this.specialty,
      idclinic: 2,
      telefono: this.cellphone
    };
    return this.doctor_service.register_doctor(doctor).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['home']);;
      },
      (error: any) => {
        console.log(error.error);
      }
    )
  }
}
