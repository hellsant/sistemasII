import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlumnoComponent } from './alumno/alumno.component';
import { ImportarComponent } from './importar/importar.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CursoComponent } from './curso/curso.component';
import { ImportarEstudianteComponent } from './importar/importar-estudiante.component';

const ROUTES: Routes = [
    { path: 'alumno', component: AlumnoComponent },
    { path: 'curso', component: CursoComponent },
    { path: 'profesor', component: ProfesorComponent },
    {
        path: 'importar', component: ImportarComponent, children: [
            { path: '', redirectTo: 'importar', pathMatch: 'full' },
            { path: 'importarEstudiante', redirectTo: 'importar', component: ImportarEstudianteComponent },
            { path: 'importarEstudiante/:id', redirectTo: 'importar', component: ImportarEstudianteComponent },
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'alumno' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
