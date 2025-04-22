import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { formModule } from '../../../../models/form-module.models';
import { FormModuleService } from '../../../../services/form-module.service';
import { FormularioFormModuleComponent } from '../formulario-form-module/formulario-form-module.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-editar-form-module',
  imports: [FormularioFormModuleComponent,CommonModule],
  templateUrl: './editar-form-module.component.html',
  styleUrl: './editar-form-module.component.css'
})
export class EditarFormModuleComponent  implements OnInit{
  @Input() id!: number;

  private readonly service = inject(FormModuleService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  modelo?: formModule;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.service.obtenerPorId(this.id).subscribe(data => {
        this.modelo = data;
      });
    }
  }

  guardarCambios(entidad: formModule) {
    if (this.modelo) {
      entidad.id = this.modelo.id;
      entidad.isDeleted = this.modelo.isDeleted; // Aseguramos mantener el valor original
    }
  
    this.service.actualizarIdNombre(entidad).subscribe(() => {
      this.router.navigate(['/indiceformModule']); // Reemplaza por tu ruta real si es otra
    });
  }
  
}
