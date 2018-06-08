import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProfesorService } from '../profesor.service';
import { Profesor } from '../profesor';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroProfesorComponent implements OnInit {

  constructor(private router: Router, private servicio: ProfesorService) { }


  submitted = false;
  model: Profesor = new Profesor();
  goals = [];
  onSubmit() { 
    this.servicio.insertProfesor(this.model);
    console.log(this.model);
    this.submitted = true; 
    this.router.navigate(['profesor']);  
    
  }


  ngOnInit() {
  }

}
