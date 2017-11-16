import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlumnoComponent } from './alumno/alumno.component';
import { ImportarComponent } from './importar/importar.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CursoComponent } from './curso/curso.component';

const ROUTES: Routes = [
    { path: 'alumno', component: AlumnoComponent },
    { path: 'importar', component: ImportarComponent },
    { path: 'curso', component: CursoComponent },
    { path: 'profesor', component: ProfesorComponent },
    { path: '**', pathMatch:'full', redirectTo:'alumno' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
