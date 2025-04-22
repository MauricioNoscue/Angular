import { Component, inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { rolUser } from '../../../../models/rol-user.models';
import { RolUserService } from '../../../../services/rol-user.service';
import { FormularioRolUserComponent } from '../formulario-rol-user/formulario-rol-user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-rol-user',
  imports: [FormularioRolUserComponent, CommonModule],
  templateUrl: './editar-rol-user.component.html',
  styleUrl: './editar-rol-user.component.css'
})
export class EditarRolUserComponent {
  @Input() id!: number;

  private readonly rolUserService = inject(RolUserService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  modelo?: rolUser;

  ngOnInit(): void {
    // Obtener el ID desde la URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar el rolUser por ID
    if (this.id) {
      this.rolUserService.obtenerPorId(this.id).subscribe(data => {
        this.modelo = data;  // Asignamos el modelo al formulario
      });
    }
  }

  // Función para guardar los cambios
  guardarCambios(entidad: rolUser) {
    if (this.modelo) {
      entidad.id = this.modelo.id;  // Mantener el ID original
      entidad.isDeleted = this.modelo.isDeleted;  // Mantener el estado original de 'isDeleted'
    }
    entidad.userName = 'usuario_default';  

    // Actualizar el rolUser
    this.rolUserService.actualizarIdNombre(entidad).subscribe(() => {
      // Redirigir a la página del índice después de guardar los cambios
      this.router.navigate(['/indiceRolUser']);
    });
  }
}
