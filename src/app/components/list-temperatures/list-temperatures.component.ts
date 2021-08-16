import { Component, OnInit, OnDestroy } from '@angular/core';
import { TermometrofireService } from "../../services/termometrofire.service";
import { Subscription } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { temp } from "../../models/temp.model";

@Component({
  selector: 'app-list-temperatures',
  templateUrl: './list-temperatures.component.html',
  styleUrls: ['./list-temperatures.component.css']
})
export class ListTemperaturesComponent implements OnInit, OnDestroy {

  userData: any = {};
  temperaturas: temp[];
  tempSubscription: Subscription;

  constructor(
    private temperatureService: TermometrofireService,
    private toast: ToastrService
  ) {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this.getTemperatures();
    //console.log(this.userData.username)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.tempSubscription.unsubscribe();
  }

  getTemperatures(){
    this.tempSubscription = this.temperatureService.getTemperatures(this.userData.username).subscribe((res: any) => {
      this.temperaturas = res;
      console.log(this.temperaturas)
    }, error => {
      this.toast.warning('No tiene registros');
    });
  }

}
