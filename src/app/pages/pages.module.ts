import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../components/component.module';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { MonitorearComponent } from './monitorear/monitorear.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ChatbotComponent,
    FormulariosComponent,
    MonitorearComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentModule,
    SharedModule
  ],
  exports: []
})
export class PagesModule { }
