import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ImportarComponent } from './importar/importar.component';
import { CursoComponent } from './curso/curso.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    ImportarComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
