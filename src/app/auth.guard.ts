import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verificar si el usuario está autenticado (puedes usar localStorage, sessionStorage o un servicio)
    const isAuthenticated = !!localStorage.getItem('userToken'); // Verifica si hay un token almacenado

    if (!isAuthenticated) {
      // Si no está autenticado, redirigir al login
      this.router.navigate(['/login']);
      return false;
    }
    return true; // Si está autenticado, permitir acceso
  }
}


