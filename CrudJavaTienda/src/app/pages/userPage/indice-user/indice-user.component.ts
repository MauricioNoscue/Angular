import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../../models/rol-user.models';
import { PersonServiceService } from '../../../../person-service.service';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-user',
  imports: [CommonModule, MatButtonModule, MatTableModule, RouterLink],
  templateUrl: './indice-user.component.html',
  styleUrl: './indice-user.component.css'
})
export class IndiceUserComponent {
  userService = inject(UserService);
  users: User[] = [];

  columnasMostrar = [
    'indice',
    'email',
    'password',
    'active',
    'isDeleted',
    'registrationDate',
    'personId',
    'namePerson',
    'acciones'
  ];

  constructor() {
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
      alert("elimindo logicamente")
    });
  }
}
