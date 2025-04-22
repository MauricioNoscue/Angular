import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../../models/rol-user.models';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PersonServiceService } from '../../../../person-service.service';
import { Person } from '../../../../person.models';

@Component({
  selector: 'app-formulario-user',
  imports: [  ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
    MatCheckboxModule,],
  templateUrl: './formulario-user.component.html',
  styleUrl: './formulario-user.component.css'
})
export class FormularioUserComponent implements OnInit {
  private fb = inject(FormBuilder);
  private personService = inject(PersonServiceService);

  personas: Person[] = [];

  @Input() titulo!: string;
  @Input() modelo?: User;
  @Output() posteoFormulario = new EventEmitter<User>();

  form = this.fb.group({
    email: [''],
    password: [''],
    active: [true],
    isDeleted: [true],
    namePerson: ['juan'],
    registrationDate: [new Date()],
    personId: [0]  // El valor de "personId" será asignado por el select
  });

  ngOnInit(): void {
    this.personService.TraerTodo().subscribe(data => {
      this.personas = data;
    });

    // Aquí se garantiza que solo se actualicen los campos presentes en el modelo
    if (this.modelo) {
      this.form.patchValue({
        email: this.modelo.email,
        password: this.modelo.password,
        active: this.modelo.active,
        isDeleted: this.modelo.isDeleted,
        registrationDate: this.modelo.registrationDate,
        personId: this.modelo.personId
      });
    }
  }

  guardarCambios(): void {
    const valores = this.form.value as User;
    this.posteoFormulario.emit(valores);
    console.log('Enviando:', valores);
  }
}
