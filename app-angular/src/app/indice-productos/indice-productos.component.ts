import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptops.models';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-indice-productos',
  imports: [MatButtonModule, RouterLink,MatTableModule],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {
   LaptopService = inject(LaptopService);
  laptops?:Laptop[];
  columnasMostrar = ['nombre','acciones']

  constructor(){
    this.cargarProductos()
  }

  cargarProductos(){
    this.LaptopService.TraerTodo().subscribe(laptops =>{
      this.laptops = laptops
    })
  }

  borrar(id:number){
    this.LaptopService.eliminar(id).subscribe(()=>{
      this.cargarProductos();
    })
  }

}
