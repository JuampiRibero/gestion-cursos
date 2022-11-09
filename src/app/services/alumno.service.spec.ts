import { TestBed } from '@angular/core/testing';

import { AlumnoService } from './alumno.service';

describe('Puebas Unitarias de AlumnoService', () => {
  let service: AlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoService);
  });

  it('Se crea AlumnoService', () => {
    expect(service).toBeTruthy();
  });
});
