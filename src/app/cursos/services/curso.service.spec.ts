import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { CursoService } from './curso.service';

describe('Puebas Unitarias de CursoService', () => {
  let service: CursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ AppModule ],
      providers: []
    });
    service = TestBed.inject(CursoService);
  });

  it('Se crea CursoService', () => {
    expect(service).toBeTruthy();
  });
});
