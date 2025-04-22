import { Component, inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../../models/rol-user.models';
import { UserService } from '../../../../services/user.service';
import { FormularioUserComponent } from '../formulario-user/formulario-user.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-editar-user',
  imports: [FormularioUserComponent,CommonModule],
  templateUrl: './editar-user.component.html',
  styleUrl: './editar-user.component.css'
})
export class EditarUserComponent {
  @Input() id!: number;

  private readonly userService = inject(UserService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  modelo?: User;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.userService.obtenerPorId(this.id).subscribe(data => {
        this.modelo = data;
      });
    }
  }

  guardarCambios(entidad: User): void {
    if (this.modelo) {
      entidad.id = this.modelo.id;
      entidad.isDeleted = this.modelo.isDeleted;  // Aseguramos mantener el valor original
    }

    this.userService.actualizar(entidad).subscribe(() => {
      this.router.navigate(['/indiceUser']);  // Cambia la ruta a la que deseas redirigir después de la actualización
    });
  }
}
