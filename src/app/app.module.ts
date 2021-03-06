import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { ProfesorService} from './profesor/profesor.service';
import { AlumnoService } from './alumno/alumno-service';
import { AppComponent } from './app.component';
import { ImportarComponent } from './importar/importar.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app.routes';
import { ImportarEstudianteComponent } from './importar/importar-estudiante.component';
import { RegistroFormComponent} from './alumno/registro-form/registro-form.component';
import { RegistroProfesorComponent } from './profesor/registro-profesor/registro-profesor.component';


@NgModule({
  declarations: [
    AppComponent,
    ImportarComponent,
    CursoComponent,
    AlumnoComponent,
    ProfesorComponent,
    NavbarComponent,
    ImportarEstudianteComponent,
    RegistroFormComponent,
    RegistroProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlumnoService, ProfesorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
