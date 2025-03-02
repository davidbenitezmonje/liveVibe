import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    console.log('HomeComponent cargado!!!');
    this.cdRef.detectChanges();  // Fuerza la actualización del componente
  }

  onLogout() {
    localStorage.removeItem('userToken'); // Elimina el token
    this.router.navigate(['/login']).then(() => {
      console.log('Redirigiendo a /login');
      window.location.reload(); // Recargar la página para asegurarse de que el formulario de login se muestre correctamente
    });
  }
}
