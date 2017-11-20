import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AlumnoComponent } from '../alumno/alumno.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImportarServiceService {
  private headers = new Headers({ 'Content-Type': 'appplication/json' });
  private url = 'http://localhost:8000/alumnos';

  constructor(private http: Http) {

  }
  /**
   *
   * @param alumno
   */
  addAlumno(alumno: AlumnoComponent) {
    const url = `${this.url}`;
    const lJson = JSON.stringify(alumno);
    return this.http.post(url, lJson, { headers: this.headers })
      ._catch(this.handleError);
  }
  /**
   *
   */
  getAlumno(): Observable<AlumnoComponent[]> {
    const url = `${this.url}`;
    return this.http.get(url).catch(this.handleError);
    // .map(r => r.json())
    // .catch(this.handleError);
  }
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

