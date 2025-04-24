import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../../../services/servicios.service';
import { FormularioGeneralComponent } from '../formulario-general/formulario-general.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-general',
  standalone: true,
  imports: [FormularioGeneralComponent, CommonModule],
  templateUrl: './editar-general.component.html',
  styleUrl: './editar-general.component.css'
})
export class EditarGeneralComponent implements OnInit {
  private servicio = inject(ServiciosService<any>);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  modelo?: any;
  endpoint!: string;
  tipoEntidad: string = '';
  id!: number;

  ngOnInit(): void {
    this.endpoint = this.route.snapshot.data['endpoint'];
    this.tipoEntidad = this.route.snapshot.data['tipoEntidad'];
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.endpoint && this.id) {
      this.servicio.getById(this.endpoint, this.id).subscribe({
        next: (respuesta) => this.modelo = respuesta,
        error: (e) => console.error('Error al obtener datos', e)
      });
    }
  }

  guardarCambios(entidad: any) {
    if (this.modelo) {
      entidad.id = this.modelo.id;
    }

    this.servicio.update(this.endpoint, entidad).subscribe(() => {
      this.router.navigate([`/principal/${this.endpoint}`]);
    });
  }
}
