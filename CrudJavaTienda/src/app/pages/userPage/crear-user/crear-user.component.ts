import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../models/rol-user.models';
import { UserService } from '../../../../services/user.service';
import { FormularioUserComponent } from '../formulario-user/formulario-user.component';
@Component({
  selector: 'app-crear-user',
  imports: [FormularioUserComponent],
  templateUrl: './crear-user.component.html',
  styleUrl: './crear-user.component.css'
})
export class CrearUserComponent {
  private readonly router = inject(Router);
  private readonly userService = inject(UserService);

  guardarCambios(user: User) {
    this.userService.Crear(user).subscribe({
      next: (respuesta) => {
        console.log('Usuario creado:', respuesta);
        this.router.navigate(['/indiceUser']); // Cambia la ruta según tus necesidades
      },
      error: (err) => {
        console.error('Error al crear usuario:', err);
        alert('Ocurrió un error al crear el usuario');
      }
    });
  }
}
