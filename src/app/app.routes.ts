import { Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EmpleadoListComponent } from './components/empleado/empleado-list/empleado-list.component';
import { EmpleadoDetailComponent } from './components/empleado/empleado-detail/empleado-detail.component';
import { EmpleadoFormComponent } from './components/empleado/empleado-form/empleado-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/calendario', pathMatch: 'full' },

  { 
    path: 'calendario', 
    component: CalendarioComponent, 
    data: { breadcrumb: 'Calendario' } 
  },

  { 
    path: 'empleados', 
    data: { breadcrumb: 'Empleados' },
    children: [
      { path: '', component: EmpleadoListComponent, data: { breadcrumb: 'Lista' } },
      { path: 'detalle/:id', component: EmpleadoDetailComponent, data: { breadcrumb: 'Detalle' } },
      { path: 'nuevo', component: EmpleadoFormComponent, data: { breadcrumb: 'Nuevo' } },
      { path: 'editar/:id', component: EmpleadoFormComponent, data: { breadcrumb: 'Editar' } },
    ]
  },

  { 
    path: 'ventas', 
    loadComponent: () => import('./components/ventas/ventas.component').then(m => m.VentasComponent), 
    data: { breadcrumb: 'Ventas' } 
  },

  { 
    path: 'almacen', 
    loadComponent: () => import('./components/almacen/almacen.component').then(m => m.AlmacenComponent), 
    data: { breadcrumb: 'Almacén' } 
  },

  { 
    path: 'configuracion', 
    loadComponent: () => import('./components/configuracion/configuracion.component').then(m => m.ConfiguracionComponent), 
    data: { breadcrumb: 'Configuración' } 
  }
];
