import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../../models/rol-user.models';
import { PersonServiceService } from '../../../../person-service.service';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-indice-user',
  imports: [CommonModule, MatButtonModule, MatTableModule, RouterLink],
  templateUrl: './indice-user.component.html',
  styleUrl: './indice-user.component.css'
})
export class IndiceUserComponent {
  userService = inject(UserService);
  authService = inject(AuthService);
  users: User[] = [];
  isAdmin = false;

  columnasMostrar: string[] = [];

  constructor() {
 this.isAdmin = this.authService.getUserRoles().includes('Admin');

    // Agregamos dinámicamente la columna 'isDeleted' si es admin
    this.columnasMostrar = this.isAdmin
      ? ['indice', 'email', 'password', 'active', 'isDeleted', 'registrationDate', 'personId', 'namePerson', 'acciones']
      : ['indice', 'email', 'password', 'active', 'registrationDate', 'personId', 'namePerson', 'acciones'];

    this.cargarDatos();
  }

  cargarDatos() {
    this.userService.TraerTodo().subscribe(data => {
      this.users = data;
    });
  }

  borrar(id: number) {
    this.userService.eliminar(id).subscribe(() => {
      this.cargarDatos();
    });
  }

  Logico(id: number) {
    this.userService.logico(id).subscribe(() => {
      this.cargarDatos();
      alert("Eliminado lógicamente");
    });
  }
}
