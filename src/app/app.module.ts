import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImportarComponent } from './importar/importar.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotasComponent } from './notas/notas.component';
import { AppRoutingModule } from './app.routes';
import { ImportarEstudianteComponent } from './importar/importar-estudiante.component';
import { ImportarNotasComponent } from './notas/importar-notas.component'

@NgModule({
  declarations: [
    AppComponent,
    ImportarComponent,
    CursoComponent,
    AlumnoComponent,
    ProfesorComponent,
    NavbarComponent,
    NotasComponent,
    ImportarNotasComponent,
    ImportarEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
