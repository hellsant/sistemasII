import { TestBed, inject } from '@angular/core/testing';

import { ProfesorService } from './profesor.service';

describe('ProfesorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesorService]
    });
  });

  it('should be created', inject([ProfesorService], (service: ProfesorService) => {
    expect(service).toBeTruthy();
  }));
});
