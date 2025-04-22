import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../../../../services/servicios.service';
import { CrearEntidadComponent } from '../../../reutilizables/crear-entidad/crear-entidad.component';
@Component({
  selector: 'app-rol-crear',
  imports: [CrearEntidadComponent],
  templateUrl: './rol-crear.component.html',
  styleUrl: './rol-crear.component.css'
})
export class RolCrearComponent {
 
}
