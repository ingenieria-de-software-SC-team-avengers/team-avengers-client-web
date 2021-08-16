import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../components/component.module';
import { ChatbotComponent } from './chatbot/chatbot.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentModule
  ],
  exports: []
})
export class PagesModule { }
