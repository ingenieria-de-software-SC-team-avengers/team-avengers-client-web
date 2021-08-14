import { Component, OnDestroy, OnInit } from '@angular/core';
import { TermometrofireService } from '../../services/termometrofire.service';
import Temperatura from '../../models/temperatura.model';
import { Subscription } from 'rxjs';

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

  constructor(private temperaturaService: TermometrofireService) {
    this.temperaturaCorporal = 0;
  }

  ngOnInit(): void {
      this.obtenerTemperatura();
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
          console.log(this.temperaturaCorporal);
        }
      });
  }

  registraTemperatura(){
    this.medirTemperatura = false;
    console.log(this.medirTemperatura);
  }
}
