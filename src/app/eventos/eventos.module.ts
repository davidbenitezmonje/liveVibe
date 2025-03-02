import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventosRoutingModule } from './eventos-routing.module';
import { EventosComponent } from './eventos.component';


@NgModule({
  declarations: [EventosComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    IonicModule
  ]
})
export class EventosModule { }


