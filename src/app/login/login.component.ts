import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    console.log("LoginComponent cargado");
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      console.log('Formulario válido');
      console.log('Email:', email);
      console.log('Password:', password);

      // Verificar si las credenciales son correctas
      if (email === 'admin@gmail.com' && password === 'Tad_R1_is22*p') {
        console.log('Credenciales correctas');
        localStorage.setItem('userToken', 'token123'); // Simula el login
        this.router.navigate(['/home']); // Redirigir al home después del login

        this.router.navigate(['/home']).then(() => {
          console.log('Redirigiendo a /home');
          window.location.reload();
        });
      } else {
        console.log('Credenciales incorrectas');
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  // logout() {
  //   localStorage.removeItem('userToken'); // Eliminar el token de autenticación
  //   this.router.navigate(['/login']).then(() => {
  //     console.log('Redirigiendo a /login');
  //     window.location.reload(); // Recargar la página para asegurarse de que el formulario de login se muestre correctamente
  //   });
  // }

}
