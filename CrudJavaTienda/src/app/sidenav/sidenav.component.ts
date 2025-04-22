import { Component } from '@angular/core';
import { OptionButtonComponent } from '../Buttons/option-button/option-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sidenav',
  imports: [OptionButtonComponent,CommonModule,FormsModule ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  categoriaSeleccionada: string = 'inicio';

}
