import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', component: ListadoProductosComponent }, // localhost:55977/
    { path: 'listado', component: ListadoProductosComponent }, // localhost:55977/listado
    { path: 'agregar', component: FormularioComponent },
    { path: 'editar/:id', component: FormularioComponent },
    { path: '**', component: ErrorComponent }
];
