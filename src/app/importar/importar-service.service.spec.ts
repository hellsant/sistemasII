import { TestBed, inject } from '@angular/core/testing';

import { ImportarServiceService } from './importar-service.service';

describe('ImportarSserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportarServiceService]
    });
  });

  it('should be created', inject([ImportarServiceService], (service: ImportarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
