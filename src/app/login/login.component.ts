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

  // onLogin() {
  //   // Verificar si el formulario es válido
  //   if (this.loginForm.valid) {
  //     const email = this.loginForm.value.email;
  //     const password = this.loginForm.value.password;

  //     console.log('Formulario válido');
  //     console.log('Email:', email);
  //     console.log('Password:', password);

  //     // Verificar si las credenciales son correctas (usuario: admin, contraseña: 1234)
  //     if (email === 'admin@gmail.com' && password === 'Tad_R1_is22*p') {
  //       console.log('Credenciales correctas');
  //       this.router.navigate(['/home'])
  //         .then(() => {
  //           console.log('Redirigiendo a /home');
  //         })
  //         .catch((err) => {
  //           console.error('Error al redirigir:', err);
  //         });
  //     } else {
  //       console.log('Credenciales incorrectas');
  //     }
  //   } else {
  //     console.log('Formulario inválido');
  //   }
  // }
  // onLogin() {
  //   if (this.loginForm.valid) {
  //     const email = this.loginForm.value.email;
  //     const password = this.loginForm.value.password;

  //     if (email === 'admin@gmail.com' && password === 'Tad_R1_is22*p') {
  //       console.log('Credenciales correctas');
  //       this.router.navigateByUrl('/home');  // Uso de navigateByUrl
  //     } else {
  //       console.log('Credenciales incorrectas');
  //     }
  //   }
  // }

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

}
