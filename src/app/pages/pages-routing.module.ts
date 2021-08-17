import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MonitorearComponent } from './monitorear/monitorear.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { CreateClinicComponent } from '../components/create-clinic/create-clinic.component';
import { RegisterDoctorComponent } from '../components/register-doctor/register-doctor.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chatbot',
    component: ChatbotComponent
  },
  {
    path: 'temperaturas',
    component: MonitorearComponent
  },
  {
    path: 'registrarClinica',
    component: CreateClinicComponent
  },
  {
    path: 'registrarDoctor',
    component: RegisterDoctorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
