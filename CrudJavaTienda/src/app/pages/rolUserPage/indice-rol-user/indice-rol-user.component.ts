import { Component, inject } from '@angular/core';
import { RolUserService } from '../../../../services/rol-user.service';
import { rolUser } from '../../../../models/rol-user.models';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-rol-user',
  imports: [CommonModule, MatButtonModule, MatTableModule, RouterLink],
  templateUrl: './indice-rol-user.component.html',
  styleUrl: './indice-rol-user.component.css'
})
export class IndiceRolUserComponent {
  rolUserService = inject(RolUserService);
  rolUsers: rolUser[] = [];

  columnasMostrar = ['indice', 'rolName', 'userName', 'isDeleted', 'acciones'];

  constructor() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.rolUserService.TraerTodo().subscribe(data => {
      this.rolUsers = data;
    });
  }

  borrar(id: number) {
    this.rolUserService.eliminar(id).subscribe(() => {
      this.cargarDatos();
    });
  }
}
