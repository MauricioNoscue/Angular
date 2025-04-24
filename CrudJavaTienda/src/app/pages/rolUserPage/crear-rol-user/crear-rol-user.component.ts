import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { rolUser } from '../../../../models/rol-user.models';
import { RolUserService } from '../../../../services/rol-user.service';
import { FormularioRolUserComponent } from '../formulario-rol-user/formulario-rol-user.component';
@Component({
  selector: 'app-crear-rol-user',
  imports: [FormularioRolUserComponent],
  templateUrl: './crear-rol-user.component.html',
  styleUrl: './crear-rol-user.component.css'
})
export class CrearRolUserComponent {
  private readonly router = inject(Router);
  private readonly rolUserService = inject(RolUserService);

  // Esta función recibe los datos del formulario y los pasa al servicio para la creación
  guardarCambios(rolUserData: rolUser) {
    this.rolUserService.Crear(rolUserData).subscribe({
      next: (respuesta) => {
        console.log('RolUsuario Creado:', respuesta);
        this.router.navigate(['/principal/indiceRolUser']);  // Redirige a la lista de RolUser
      },
      error: (err) => {
        console.error('Error al crear RolUser:', err);
        alert('Ocurrió un error al crear el RolUser');
      }
    });
  }
}
