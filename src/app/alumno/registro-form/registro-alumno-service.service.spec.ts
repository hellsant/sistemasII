import { TestBed, inject } from '@angular/core/testing';

import { RegistroAlumnoService } from './registro-alumno.service';

describe('RegistroAlumnoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroAlumnoService]
    });
  });

  it('should be created', inject([RegistroAlumnoService], (service: RegistroAlumnoService) => {
    expect(service).toBeTruthy();
  }));
});
