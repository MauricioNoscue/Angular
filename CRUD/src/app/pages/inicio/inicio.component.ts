import { Message } from './../../../../node_modules/esbuild-wasm/lib/main.d';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  //standalone: true, // Añadir esta línea
  imports: [MatCardModule,MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
private empleadoServicio = inject(EmpleadoService);
public listaEmpleados:Empleado[]=[];
public displayedColumns:string[]=['Nombre','Correo','Sueldo','Fecha','accion'];

obtenerEmpleados(){
  this.empleadoServicio.lista().subscribe({
    next:(data)=>{
      if(data.length > 0){
        this.listaEmpleados = data
        console.log(data)
      }
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

constructor(private router:Router){
  this.obtenerEmpleados();
}
 nuevo(){
  this.router.navigate(['/empleado',0])
 }

 editar(objeto:Empleado){
  this.router.navigate(['/empleado',objeto.idEmpleado])
 }

 eliminar(objeto:Empleado){
  if(confirm("Desea eliminar el empleado " + objeto.nombre + "?")){
    this.empleadoServicio.eliminar(objeto.idEmpleado).subscribe({
      next:(data)=>{
        if(data.isSuccess){
          this.obtenerEmpleados();
        }else{
          alert('no se elimino')
        }
      },
      error:(err)=>{
        console.log(err.Message)
      }
    })
  }
 }

}
