import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormModuleService } from '../../../../services/form-module.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { formModule } from '../../../../models/form-module.models';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-formulario-form-module',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatButtonModule,RouterLink,MatNativeDateModule,MatDatepickerModule,MatOption,CommonModule,MatSelectModule ],
  templateUrl: './formulario-form-module.component.html',
  styleUrl: './formulario-form-module.component.css'
})
export class FormularioFormModuleComponent implements OnInit {

  private readonly fb = inject(FormBuilder);
  private readonly formuModylelarioService = inject(FormModuleService);

  forms: { id: number; name: string }[] = [];
  modules: { id: number; name: string }[] = [];

  form = this.fb.group({
    formId: [null as number | null],
    moduleId: [null as number | null],
    formName: ['Nombre Quemado del Formulario'],
    moduleName: ['Nombre Quemado del Módulo'],
    isDeleted: [false]
  });
  

  @Input() titulo!: string;
  @Input() modelo?: formModule;
  @Output() posteoFormulario = new EventEmitter<formModule>();

  ngOnInit(): void {
    this.cargarFormularios();
    this.cargarModulos();

    if (this.modelo) {
      this.form.patchValue(this.modelo);
    }

    this.form.get('formId')?.valueChanges.subscribe((id) => {
      const form = this.forms.find(f => f.id === id);
      this.form.patchValue({ formName: form?.name ?? '' });
    });

    this.form.get('moduleId')?.valueChanges.subscribe((id) => {
      const mod = this.modules.find(m => m.id === id);
      this.form.patchValue({ moduleName: mod?.name ?? '' });
    });
  }

  cargarFormularios() {
    this.formuModylelarioService.TraerTodoForm().subscribe(data => {
      this.forms = data.map(f => ({ id: f.id, name: f.name ?? `Formulario ${f.id}` }));
      console.log(data)

    });
  }

  cargarModulos() {
    this.formuModylelarioService.TraerTodoModule().subscribe(data => {
      this.modules = data.map(m => ({ id: m.id, name: m.name ?? `Módulo ${m.id}` }));
      console.log(data)
    });}
    guardarCambios() {
      const valores = this.form.value as formModule;
      this.posteoFormulario.emit(valores);
      console.log('Enviando:', valores);
    }
}
