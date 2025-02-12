import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { LaptopService } from '../laptop.service';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import { LaptopCreacion, Laptop } from '../laptops.models';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";

@Component({
  selector: 'app-crear-productos',
  imports: [FormularioProductoComponent],
  templateUrl: './crear-productos.component.html',
  styleUrl: './crear-productos.component.css'
})
export class CrearProductosComponent {
  router = inject(Router);
    LaptopService = inject(LaptopService);


  guardarCambios(laptop :LaptopCreacion){
    this.LaptopService.Crear(laptop).subscribe(()=>{
      this.router.navigate(['productos']);
    })

  }
}
