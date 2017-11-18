import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlumnoComponent {


  private nombre: string;

  private apellidos: string;
  public getapellidos(): string {
    return this.apellidos;
  }
  public setapellidos(v: string) {
    this.apellidos = v;
  }

  public getnombre(): string {
    return this.nombre;
  }
  public setnombre(v: string) {
    this.nombre = v;
  }


  constructor() { }



}
