import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlumnoComponent } from './alumno/alumno.component';
import { ImportarComponent } from './importar/importar.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CursoComponent } from './curso/curso.component';
import { ImportarEstudianteComponent } from './importar/importar-estudiante.component';

const appRouters: Routes = [
    { path: 'alumno', component: AlumnoComponent },
    { path: 'curso', component: CursoComponent },
    { path: 'profesor', component: ProfesorComponent },
    {
        path: 'importar', component: ImportarComponent, children: [
            { path: '', redirectTo: 'importarEstudiante', pathMatch: 'full' },
            { path: 'importarEstudiante', component: ImportarEstudianteComponent },
            { path: 'importarEstudiante/:id', component: ImportarEstudianteComponent },
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'alumno' },
];
@NgModule({
    imports:[
        RouterModule.forRoot(appRouters)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{};
