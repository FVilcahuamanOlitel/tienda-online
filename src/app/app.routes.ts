import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

export const routes: Routes = [
    { path: '', component: ListadoProductosComponent, canActivate: [LoginGuard] },
    { path: 'listado', component: ListadoProductosComponent, canActivate: [LoginGuard] },
    { path: 'agregar', component: FormularioComponent, canActivate: [LoginGuard] },
    { path: 'editar/:llave', component: FormularioComponent, canActivate: [LoginGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorComponent }
];
