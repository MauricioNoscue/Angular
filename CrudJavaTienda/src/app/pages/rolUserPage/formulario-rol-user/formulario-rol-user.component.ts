import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { rolUser } from '../../../../models/rol-user.models';
import { RolUserService } from '../../../../services/rol-user.service';

@Component({
  selector: 'app-formulario-rol-user',
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOption,
    CommonModule,
    RouterLink],
  templateUrl: './formulario-rol-user.component.html',
  styleUrl: './formulario-rol-user.component.css'
})
export class FormularioRolUserComponent implements OnInit {

  private fb = inject(FormBuilder);
  private rolUserService = inject(RolUserService);

  form = this.fb.group({
    userId: [null as number | null],  // ✅ Cambiar de personId a userId
    rolId: [null as number | null],
    userName: ['sdsd'],
    rolName: ['dsdsdds'],
    isDeleted: [true]
  });
  

  users: { id: number; name: string }[] = [];
  roles: { id: number; name: string }[] = [];

  @Input() titulo!: string;
  @Input() modelo?: rolUser;
  @Output() posteoFormulario = new EventEmitter<rolUser>();

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarRoles();

    if (this.modelo) {
      this.form.patchValue(this.modelo);
    }

    this.form.get('userId')?.valueChanges.subscribe((id) => {
      const user = this.users.find(u => u.id === id);
      this.form.patchValue({ userName: 'dfdfdf' });
    });
    

    this.form.get('rolId')?.valueChanges.subscribe((id) => {
      const rol = this.roles.find(r => r.id === id);
      this.form.patchValue({ rolName: rol?.name ?? '' });
    });
  }

  cargarUsuarios() {
    this.rolUserService.TraerTodoUser().subscribe(data => {
      this.users = data.map(u => ({
        id: u.id,
        name: u.email ?? `Usuario ${u.id}`
      }));
    });
  }

  cargarRoles() {
    this.rolUserService.TraerTodoRol().subscribe(data => {
      this.roles = data.map(r => ({
        id: r.id,
        name: r.name ?? `Rol ${r.id}`
      }));
    });
  }

  guardarCambios() {
    const valores = this.form.value as rolUser;
    this.posteoFormulario.emit(valores);
    console.log('Guardando:', valores);
  }
}
