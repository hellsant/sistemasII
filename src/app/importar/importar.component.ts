import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImportarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  addActivity() {
    let fileImput: any = document.getElementById('subirArchivo');
    let archivo = fileImput.files[0];

  }
}
