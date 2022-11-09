import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';

describe('Puebas Unitarias de AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuard);
  });

  it('Se crea AdminGuard', () => {
    expect(guard).toBeTruthy();
  });
});
