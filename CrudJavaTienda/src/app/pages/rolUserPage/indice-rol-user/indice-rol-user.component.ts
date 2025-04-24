import { rolUser } from './../../../../models/rol-user.models';
import { Component, inject } from '@angular/core';
import { RolUserService } from '../../../../services/rol-user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ServiciosService } from '../../../../services/servicios.service';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-indice-rol-user',
  imports: [CommonModule, MatButtonModule, MatTableModule, RouterLink,FormsModule, MatSlideToggleModule],
  templateUrl: './indice-rol-user.component.html',
  styleUrl: './indice-rol-user.component.css'
})
export class IndiceRolUserComponent {
  rolUserService = inject(RolUserService);
  rolUsers: rolUser[] = [];
  rolUser:string = 'RolUser';
   isAdmin = false;
    authService = inject(AuthService);
    servicio = inject(ServiciosService)

  columnasMostrar = ['indice', 'rolName', 'userName', 'isDeleted', 'acciones'];

  constructor() {
    this.isAdmin = this.authService.getUserRoles().includes('Admin');
    this.cargarDatos();
  }

  cargarDatos() {
    this.rolUserService.TraerTodo().subscribe(data => {
      this.rolUsers = data;
      console.log(data)
    });
  }

  borrar(id: number) {
    this.rolUserService.eliminar(id).subscribe(() => {
      this.cargarDatos();
    });
  }

  patch(id: number) {
    this.servicio.patchIsDeleted(this.rolUser, id).subscribe({
      next: (data) => {
        this.cargarDatos();
        const  mensaje = data.message
        console.log(mensaje)
        if(mensaje === " eliminado lógico correctamente"){
          alert("Dato eliminado lógicamente");
        }else{
          alert("Dato reintegrado")
        }
       
        console.log(data)
      },
      error: (e) => console.error('Error al actualizar', e)
    });
  }
}
