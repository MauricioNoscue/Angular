import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { IndiceComponent } from './pages/indice/indice.component';
import { CrearComponent } from '../crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { RolCrearComponent } from './pages/rolPage/rol-crear/rol-crear.component';
import { ModuleCrearComponent } from './pages/modulePage/module-crear/module-crear.component';
import { PermissionCrearComponent } from './pages/permissionPage/permission-crear/permission-crear.component';
import { FormCrearComponent } from './pages/formPage/form-crear/form-crear.component';
import { RolIndiceComponent } from './pages/rolPage/rol-indice/rol-indice.component';
import { PermisionIndiceComponent } from './pages/permissionPage/permision-indice/permision-indice.component';
import { ModuleIndiceComponent } from './pages/modulePage/module-indice/module-indice.component';
import { FormIndiceComponent } from './pages/formPage/form-indice/form-indice.component';
import { EditarGeneralComponent } from './reutilizables/editar-general/editar-general.component';
import { IndiceFormModuleComponent } from './pages/formModulePage/indice-form-module/indice-form-module.component';
import { CrearFormModuleComponent } from './pages/formModulePage/crear-form-module/crear-form-module.component';
import { EditarFormModuleComponent } from './pages/formModulePage/editar-form-module/editar-form-module.component';
import { IndiceRolUserComponent } from './pages/rolUserPage/indice-rol-user/indice-rol-user.component';
import { FormularioRolUserComponent } from './pages/rolUserPage/formulario-rol-user/formulario-rol-user.component';
import { CrearRolUserComponent } from './pages/rolUserPage/crear-rol-user/crear-rol-user.component';
import { EditarRolUserComponent } from './pages/rolUserPage/editar-rol-user/editar-rol-user.component';
import { IndiceUserComponent } from './pages/userPage/indice-user/indice-user.component';
import { CrearUserComponent } from './pages/userPage/crear-user/crear-user.component';
import { EditarUserComponent } from './pages/userPage/editar-user/editar-user.component';
export const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      { path: '', redirectTo: 'indice', pathMatch: 'full' },
      { path: 'indice', component: IndiceComponent },
      { path: 'indice/crear', component: CrearComponent },
      { path: 'actualizar/:id', component: EditarComponent },
      { path: 'indiceRol/rolCrear', component: RolCrearComponent },
      { path: 'rol/rolCrear', component: RolCrearComponent },
      { path: 'ModuleIndice/moduleCrear', component: ModuleCrearComponent },
      { path: 'Module/moduleCrear', component: ModuleCrearComponent },
      { path: 'indicePermission/permissionCrear', component: PermissionCrearComponent },
      { path: 'permission/permissionCrear', component: PermissionCrearComponent },
      { path: 'FormIndice/formCrear', component: FormCrearComponent },
      { path: 'form/formCrear', component: FormCrearComponent },
      { path: 'indiceRol', component: RolIndiceComponent },
      { path: 'indicePermission', component: PermisionIndiceComponent },
      { path: 'ModuleIndice', component: ModuleIndiceComponent },
      { path: 'FormIndice', component: FormIndiceComponent },
      { path: 'rol', component: RolIndiceComponent },
      { path: 'form', component: FormIndiceComponent },
      { path: 'Module', component: ModuleIndiceComponent },
      { path: 'permission', component: PermisionIndiceComponent },
      { path: 'indiceformModule', component: IndiceFormModuleComponent },
      { path: 'indiceformModule/crearFormModule', component: CrearFormModuleComponent },
      { path: 'formmoduleEditar/:id', component: EditarFormModuleComponent },

      { path: 'indiceRolUser', component: IndiceRolUserComponent },
      { path: 'indiceRolUser/crearRolUser', component: CrearRolUserComponent },
      { path: 'roluserEditar/:id', component: EditarRolUserComponent },
      { path: 'indiceUser', component: IndiceUserComponent },
      { path: 'indiceUser/crearUser', component: CrearUserComponent },
      { path: 'editaruser/:id', component: EditarUserComponent },









      

      

      {
        path: 'rol/:id',
        component: EditarGeneralComponent,
        data: {
          endpoint: 'rol',
          tipoEntidad: 'rol'
        }
      }, {
        path: 'form/:id',
        component: EditarGeneralComponent,
        data: {
          endpoint: 'form',
          tipoEntidad: 'pepito'
        }
      },
      {
        path: 'Module/:id',
        component: EditarGeneralComponent,
        data: {
          endpoint: 'Module',
          tipoEntidad: 'Module'
        }
      }
      
    ]
  }
];
