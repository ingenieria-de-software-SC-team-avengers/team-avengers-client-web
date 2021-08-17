import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermometroComponent } from "./termometro/termometro.component";
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { FormsModule } from '@angular/forms';
import { ListTemperaturesComponent } from './list-temperatures/list-temperatures.component';
import { CreateClinicComponent } from './create-clinic/create-clinic.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';



@NgModule({
  declarations: [
    TermometroComponent, 
    AddTutorialComponent, 
    TutorialDetailsComponent, 
    TutorialListComponent, 
    ListTemperaturesComponent, 
    CreateClinicComponent, RegisterDoctorComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    TermometroComponent,
    ListTemperaturesComponent,
    CreateClinicComponent
  ]
})
export class ComponentModule { }
