import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { ServiciosService } from '../../../services/servicios.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-indice-entidad',
  standalone: true,
  templateUrl: './indice-entidad.component.html',
  styleUrl: './indice-entidad.component.css',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatSlideToggleModule,FormsModule
  ]
})
export class IndiceEntidadComponent<T extends { id: number }> implements OnChanges {
  private servicio = inject(ServiciosService);
  private router = inject(Router);

  @Input({ required: true }) endpoint!: string;
  @Input({ required: true }) propiedadesMostrar!: string[];
  @Input({ required: true }) titulo!: string;
  @Input() rutaEditar: string = ''; 
  @Input() rutaCrear: string = ''; 
  isAdmin = false;
  authService = inject(AuthService);


  data: T[] = [];
  columnasMostrar: string[] = [];

  constructor(){
    this.isAdmin = this.authService.getUserRoles().includes('Admin');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.propiedadesMostrar && this.propiedadesMostrar.length > 0) {
      this.columnasMostrar = [...this.propiedadesMostrar, 'acciones'];
      this.cargarDatos();
    }
  }

  cargarDatos2() {
    this.servicio.getAll(this.endpoint).subscribe({
      next: (respuesta) => this.data = respuesta,
      error: (e) => console.error('Error cargando datos', e)
    });
  }

  cargarDatos() {
    this.servicio.getAll(this.endpoint).subscribe( data =>{
     if(!this.isAdmin){
       this.data = data.filter((e:any)=> e.IsDeleted === true || e.IsDeleted === 1);
     }else{
      this.data = data;
     }
     console.log(data);
   });
 }
  // cargarroles(){
  //   this.apiService.ObtenerTodo('rol').subscribe(roles => {
  //     if (!this.isAdmin) {
  //       this.roles = roles.filter((p: any) => p.status === true || p.status === 1);
  //     } else {
  //       this.roles = roles;
  //     }
  //     console.log(roles)
  //   })
  // }
  

  borrar(id: number) {
    this.servicio.delete(this.endpoint, id).subscribe(() => this.cargarDatos());
  }
 
  patch(id: number) {
    this.servicio.patchIsDeleted(this.endpoint, id).subscribe({
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
