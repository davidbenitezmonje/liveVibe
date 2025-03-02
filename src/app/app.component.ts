import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',  // Asegúrate de que este selector sea 'app-root'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'LiveVibe';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('userToken'); // Eliminar el token de autenticación
    this.router.navigate(['/login']).then(() => {
      console.log('Redirigiendo a /login');
      window.location.reload(); // Recargar la página para asegurarse de que el formulario de login se muestre correctamente
    });
  }
}
