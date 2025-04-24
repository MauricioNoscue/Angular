import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { formModule } from '../../../../models/form-module.models';
import { FormModuleService } from '../../../../services/form-module.service';
import { FormularioFormModuleComponent } from '../formulario-form-module/formulario-form-module.component';
@Component({
  selector: 'app-crear-form-module',
  imports: [FormularioFormModuleComponent],
  templateUrl: './crear-form-module.component.html',
  styleUrl: './crear-form-module.component.css'
})
export class CrearFormModuleComponent {
  private readonly router = inject(Router);
  private readonly formModuleService = inject(FormModuleService);

  guardarCambios(formMod: formModule) {
    this.formModuleService.Crear(formMod).subscribe({
      next: (respuesta) => {
        console.log('Creado:', respuesta);
        this.router.navigate(['principal//indiceformModule']);
      },
      error: (err) => {
        console.error('Error al crear:', err);
        alert('Ocurrió un error al crear el FormModule');
      }
    });
    
  }
}
