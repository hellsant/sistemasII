import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Profesor } from './profesor';
import { ProfesorService } from './profesor.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
  providers: [ProfesorService],
  encapsulation: ViewEncapsulation.None
})
export class ProfesorComponent implements OnInit {

  lista: Profesor[];

  constructor(
	  private servicio: ProfesorService
  ) { }

  ngOnInit() {
    this.servicio.getProfesor().subscribe(
      rs => this.lista = rs,
      er => console.log(er),
      () => console.log(this.lista)
    );
  }

}
