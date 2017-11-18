import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CursoComponent implements OnInit {


  private _curso: number;

  private _paralelo: string;

  public get paralelo(): string {
    return this._paralelo;
  }
  public set paralelo(v: string) {
    this._paralelo = v;
  }

  public get curso(): number {
    return this._curso;
  }
  public set curso(v: number) {
    this._curso = v;
  }

  constructor() { }

  ngOnInit() {
  }

}
