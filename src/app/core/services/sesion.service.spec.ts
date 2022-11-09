import { TestBed } from '@angular/core/testing';

import { SesionService } from './sesion.service';

describe('Puebas Unitarias de SesionService', () => {
  let service: SesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesionService);
  });

  it('Se crea SesionService', () => {
    expect(service).toBeTruthy();
  });
});
