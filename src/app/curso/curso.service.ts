import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Curso } from './curso';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
@Injectable()
export class CursoService {

  private headers = new Headers({ 'Content-Type': 'appplication/json' });
  private url = 'http://localhost:8000/curso';

  /**
   * 
   * @param http 
   */
  constructor(private http: Http) {
  }

  /**
   *
   */
  getCurso(): Observable<Curso[]> {
      const url = `${this.url}`;
      return this.http.get(url)
          .map(r => r.json())
          .catch(this.handleError);
  }

  /**
   * 
   * @param error 
   */
  private handleError(error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''}  ${err}`;
      } else {
          errMsg = error.mesasage ? error.message : error.toString();
      }
      return Observable.throw(errMsg);
  }
}
