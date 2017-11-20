import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ImportarComponent } from './importar/importar.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { ImportarEstudianteComponent } from './importar/importar-estudiante.component';


@NgModule({
  declarations: [
    AppComponent,
    ImportarComponent,
    CursoComponent,
    AlumnoComponent,
    ProfesorComponent,
    NavbarComponent,
    ImportarEstudianteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
