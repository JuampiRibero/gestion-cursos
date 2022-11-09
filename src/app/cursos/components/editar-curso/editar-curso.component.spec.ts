import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { EditarCursoComponent } from './editar-curso.component';

describe('Puebas Unitarias de EditarCursoComponent', () => {
  let component: EditarCursoComponent;
  let fixture: ComponentFixture<EditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursoComponent ],
      imports: [ AppModule ],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea EditarCursoComponent', () => {
    expect(component).toBeTruthy();
  });
});
