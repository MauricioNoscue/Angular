import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../../../services/servicios.service';
import { FormularioGeneralComponent } from '../formulario-general/formulario-general.component';
@Component({
  selector: 'app-crear-entidad',
  imports: [FormularioGeneralComponent],
  templateUrl: './crear-entidad.component.html',
  styleUrl: './crear-entidad.component.css'
})
export class CrearEntidadComponent<T extends object> {
  private router = inject(Router);
  private servicio = inject(ServiciosService);

  @Input({ required: true }) endpoint!: string; // ej: 'rol', 'permission'
  @Input({ required: true }) tipoEntidad!: string; // ej: 'pepito' si se requiere campo url
  @Input({ required: true }) titulo!: string;

  guardarCambios(entidad: Partial<T>) {
    this.servicio.create(this.endpoint, entidad).subscribe(() => {
      this.router.navigate([`/principal/${this.endpoint}`]);
    });
  }
}
