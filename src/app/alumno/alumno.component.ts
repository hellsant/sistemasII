import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Alumno } from './alumno';
import { AlumnoService } from './alumno-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [AlumnoService],
  encapsulation: ViewEncapsulation.None
})
export class AlumnoComponent implements OnInit {

  lista: Alumno[];

  /**
   *
   */
  constructor(
    private servicio: AlumnoService,
    private router: Router,
  ) { }

  /**
   *
   */
  ngOnInit() {
    this.servicio.getAlumno().subscribe(
      rs => this.lista = rs,
      er => console.log(er),
      () => console.log(this.lista)
    );
  }
}
