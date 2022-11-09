import { TestBed } from '@angular/core/testing';

import { AutenticacionGuard } from './autenticacion.guard';

describe('Puebas Unitarias de AutenticacionGuard', () => {
  let guard: AutenticacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticacionGuard);
  });

  it('Se crea AutenticacionGuard', () => {
    expect(guard).toBeTruthy();
  });
});
