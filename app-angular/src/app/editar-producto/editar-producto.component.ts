import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop, LaptopCreacion } from '../laptops.models';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  imports: [FormularioProductoComponent],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {

  @Input({transform: numberAttribute})
  id!:number

  LaptopService = inject(LaptopService);
  router = inject(Router)
  modelo?:Laptop;

  ngOnInit(): void {
    this.LaptopService.obtenerPorId(this.id).subscribe(laptop=>{
      this.modelo = laptop;
    })
  }

  guardarCambios(laptop: LaptopCreacion){
    this.LaptopService.actualizarIdNombre(this.id,laptop).subscribe(()=>{
      this.router.navigate(['/productos']);
    })
  }
}
