import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ImportarComponent } from './importar/importar.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    ImportarComponent,
    CursoComponent,
    AlumnoComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
