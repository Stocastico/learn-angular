import { TestBed } from '@angular/core/testing';

import { CamisetasService } from './camisetas.service';

describe('CamisetasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamisetasService = TestBed.get(CamisetasService);
    expect(service).toBeTruthy();
  });
});
