import { Component, OnDestroy, OnInit } from '@angular/core';
import { TermometrofireService } from '../../services/termometrofire.service';
import Temperatura from '../../models/temperatura.model';
import { Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { tempSensor } from '../../models/temperatureSensor.model';
import { UserData } from '../../models/userData.model';

@Component({
  selector: 'app-termometro',
  templateUrl: './termometro.component.html',
  styleUrls: ['./termometro.component.css'],
})
export class TermometroComponent implements OnInit, OnDestroy {
  temperatura: any;
  temperaturaCorporal: number;
  fireSubscription: Subscription;
  medirTemperatura = false;
  userData: any = {};

  constructor(
    private temperaturaService: TermometrofireService,
    private toast: ToastrService
    ) {
    this.temperaturaCorporal = 0;
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
      this.obtenerTemperatura();
      //console.log(this.userData.username);
  }

  ngOnDestroy(): void {
    this.fireSubscription.unsubscribe();
  }

  changeEstado() {
    this.medirTemperatura = true;
    console.log(this.medirTemperatura)
  }

  obtenerTemperatura(): void {
    this.fireSubscription = this.temperaturaService
      .getAll()
      .snapshotChanges()
      .subscribe((data) => {
        this.temperatura = data.payload.toJSON();
        if (Math.floor(this.temperatura) < 42 && this.medirTemperatura == true) {
          this.temperaturaCorporal = Math.floor(this.temperatura);
          //console.log(this.temperaturaCorporal);
        }
      });
  }

  registraTemperatura(){
    const tempSensor: tempSensor = {
      valor: this.temperaturaCorporal,
      username: this.userData.username
    }

    this.temperaturaService.registerTemperature(tempSensor).subscribe((res: any) => {
      this.toast.success(res.message);
    }, error => {
      this.toast.warning('Error no se pudo guardar los datos');
    });
  }
}
