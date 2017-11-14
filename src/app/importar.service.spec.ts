import { TestBed, inject } from '@angular/core/testing';

import { ImportarService } from './importar.service';

describe('ImportarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportarService]
    });
  });

  it('should be created', inject([ImportarService], (service: ImportarService) => {
    expect(service).toBeTruthy();
  }));
});
