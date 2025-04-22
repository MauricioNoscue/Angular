import { Component } from '@angular/core';
import { CrearEntidadComponent } from '../../../reutilizables/crear-entidad/crear-entidad.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-crear',
  imports: [CrearEntidadComponent,CommonModule],
  templateUrl: './form-crear.component.html',
  styleUrl: './form-crear.component.css'
})
export class FormCrearComponent {

}
