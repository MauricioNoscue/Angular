import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';

export const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'empleado/:id',component:EmpleadoComponent},


];
