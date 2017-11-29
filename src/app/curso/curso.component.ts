import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Curso } from './curso';
import { AlumnoService } from '../alumno/alumno-service';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [CursoService],
  encapsulation: ViewEncapsulation.None
})
export class CursoComponent implements OnInit {

  lista: Curso[];

  constructor(
    private servicio: CursoService
  ) { }

  /**
   *
   */
  ngOnInit() {
    this.servicio.getCurso().subscribe(
      rs => this.lista = rs,
      er => console.log(er),
      () => console.log(this.lista)
    );
  }
}
