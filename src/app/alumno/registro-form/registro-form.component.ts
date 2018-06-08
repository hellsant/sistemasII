import { Component, OnInit, ViewEncapsulation,} from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroFormComponent implements OnInit {

  
  constructor(private router: Router, private servicio: AlumnoService) {
  }

  submitted = false;
  model: Alumno = new Alumno();
  goals = [];
  onSubmit() { 
    this.servicio.insertAlumno(this.model);
    console.log(this.model);
    this.submitted = true; 
    this.router.navigate(['alumno']);  
    
  }
  ngOnInit() {}
}
