import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { DetalleCursoComponent } from './detalle-curso.component';

describe('Puebas Unitarias de DetalleCursoComponent', () => {
  let component: DetalleCursoComponent;
  let fixture: ComponentFixture<DetalleCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCursoComponent ],
      imports: [ AppModule ],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea DetalleCursoComponent', () => {
    expect(component).toBeTruthy();
  });
});
