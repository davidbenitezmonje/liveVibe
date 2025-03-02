import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarioComponent, // Asegúrate de que esta ruta está bien configurada
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
