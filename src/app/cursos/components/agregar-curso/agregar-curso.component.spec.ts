import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCursoComponent } from './agregar-curso.component';
import { AppModule } from '../../../app.module';

describe('Puebas Unitarias de AgregarCursoComponent', () => {
  let component: AgregarCursoComponent;
  let fixture: ComponentFixture<AgregarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursoComponent ],
      imports: [ AppModule ],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea AgregarCursoComponent', () => {
    expect(component).toBeTruthy();
  });
});
