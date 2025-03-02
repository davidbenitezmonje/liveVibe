import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario.component';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    IonicModule
  ]
})
export class CalendarioModule { }
