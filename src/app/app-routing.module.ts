import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes  } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),  // Asegúrate de que la ruta apunta al HomeModule
  },

  {
    path: 'home',
    loadChildren: () => {
      console.log('Cargando HomeModule...aaa');
      return import('./home/home.module').then(m => m.HomeModule);
    },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
