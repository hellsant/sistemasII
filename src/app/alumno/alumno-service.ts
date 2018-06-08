import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../alumno/alumno';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AlumnoService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'http://localhost:8000/alumno';

    /**
     * 
     * @param http 
     */
    constructor(private http: Http) {
    }

    /**
     *
     */
    getAlumno(): Observable<Alumno[]> {
        const url = `${this.url}`;
        return this.http.get(url)
            .map(r => r.json())
            .catch(this.handleError);
    }

    insertAlumno(item: Alumno) {
        const url = `${this.url}`;
        return this.http.post(url, item).subscribe(res => console.log(res.json()));
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

