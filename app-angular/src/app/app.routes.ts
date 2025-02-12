import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndiceProductosComponent } from './indice-productos/indice-productos.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

export const routes: Routes = [
  {path: '', component: LandingComponent},
  {path:'productos', component: IndiceProductosComponent},
  {path:'productos/crear', component: CrearProductosComponent},
  {path:'productos/editar/:id', component: EditarProductoComponent}
];
