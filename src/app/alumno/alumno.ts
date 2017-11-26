import { Curso } from '../curso/curso';

export class Alumno {

    curso: Curso;
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public cursoId: number
    ) { }
}
