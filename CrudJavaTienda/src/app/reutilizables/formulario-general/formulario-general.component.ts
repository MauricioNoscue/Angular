import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-general',
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,CommonModule],
  templateUrl: './formulario-general.component.html',
  styleUrl: './formulario-general.component.css'
})
export class FormularioGeneralComponent<T extends object> implements OnInit {
  private readonly formBuilder = inject(FormBuilder);

  form!: FormGroup;

  @Input({ required: true }) titulo!: string;
  @Input() modelo?: Partial<T>;
  @Input() tipoEntidad: string = ''; 
  @Output() posteoFormulario = new EventEmitter<T>();

  ngOnInit(): void {
    // Formulario base
    const baseForm: Record<string, any> = {
      name: [''],
      description: [''],
      isDeleted: true
    };

    // Si es pepito, agregar campo adicional
    if (this.tipoEntidad === 'pepito') {
      baseForm['url'] = [''];

    }

    this.form = this.formBuilder.group(baseForm);

    // Patch del modelo si se recibe{}
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo as any);
    }
  }

  guardarCambios() {
    const entidad = this.form.value as T;
    this.posteoFormulario.emit(entidad);
    console.log(entidad);
  }
}
