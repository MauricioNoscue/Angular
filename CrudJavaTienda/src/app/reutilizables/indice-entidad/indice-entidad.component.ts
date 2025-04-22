import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { ServiciosService } from '../../../services/servicios.service';

@Component({
  selector: 'app-indice-entidad',
  standalone: true,
  templateUrl: './indice-entidad.component.html',
  styleUrl: './indice-entidad.component.css',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule
  ]
})
export class IndiceEntidadComponent<T extends { id: number }> implements OnChanges {
  private servicio = inject(ServiciosService);
  private router = inject(Router);

  @Input({ required: true }) endpoint!: string;
  @Input({ required: true }) propiedadesMostrar!: string[];
  @Input({ required: true }) titulo!: string;
  @Input() rutaEditar: string = ''; // ejemplo: 'editar'
  @Input() rutaCrear: string = ''; // ejemplo: 'editar'


  data: T[] = [];
  columnasMostrar: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.propiedadesMostrar && this.propiedadesMostrar.length > 0) {
      this.columnasMostrar = [...this.propiedadesMostrar, 'acciones'];
      this.cargarDatos();
    }
  }

  cargarDatos() {
    this.servicio.getAll(this.endpoint).subscribe({
      next: (respuesta) => this.data = respuesta,
      error: (e) => console.error('Error cargando datos', e)
    });
  }

  borrar(id: number) {
    this.servicio.delete(this.endpoint, id).subscribe(() => this.cargarDatos());
  }
}
