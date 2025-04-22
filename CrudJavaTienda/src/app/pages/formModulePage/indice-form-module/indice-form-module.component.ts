import { Component, inject } from '@angular/core';
import { formModule } from '../../../../models/form-module.models';
import { FormModuleService } from '../../../../services/form-module.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-form-module',
  imports: [CommonModule,MatButtonModule,MatTableModule,RouterLink],
  templateUrl: './indice-form-module.component.html',
  styleUrl: './indice-form-module.component.css'
})
export class IndiceFormModuleComponent {
  formModuleService = inject(FormModuleService);
  formModules: formModule[] = [];

  columnasMostrar = ['indice', 'formName', 'moduleName', 'isDeleted', 'acciones'];

  constructor() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.formModuleService.TraerTodo().subscribe(data => {
      this.formModules = data;
    });
  }

  borrar(id: number) {
    this.formModuleService.eliminar(id).subscribe(() => {
      this.cargarDatos();
    });
  }
}
