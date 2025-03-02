import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos.component';

const routes: Routes = [
  {
    path: '',
    component: EventosComponent, // Asegúrate de que esta ruta está bien configurada
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }

