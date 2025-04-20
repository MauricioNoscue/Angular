import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { IndiceComponent } from './pages/indice/indice.component';
import { CrearComponent } from '../crear/crear.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [




  {
    path: '',
    component: PrincipalComponent,
    children: [
      { path: '', redirectTo: 'indice', pathMatch: 'full' },
      { path: 'indice', component: IndiceComponent },
      { path: 'crear', component: CrearComponent },
      {path:"actualizar/:id", component:EditarComponent} // si quieres más
    ]
  }
];
