import { TestBed, inject } from '@angular/core/testing';

import { NotasServiceService } from './notas-service.service';

describe('NotasSserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotasServiceService]
    });
  });

  it('should be created', inject([NotasServiceService], (service: NotasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
