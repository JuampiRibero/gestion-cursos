import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCursoComponent } from './agregar-curso.component';
import { AppModule } from '../../../app.module';
import { By } from '@angular/platform-browser';

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

  it('El formulario es invalido cuando ingreso unicamente la comision del curso', () => {
    const formulario = component.formularioCurso;
    const comision = formulario.controls['comision'];

    comision.setValue('12345');

    expect(formulario.valid).toBeFalse();
  });

  it('El formulario es valido cuando ingreso el nombre del curso', () => {
    const formulario = component.formularioCurso;
    const nombre = formulario.controls['nombre'];

    nombre.setValue('Java');

    expect(formulario.valid).toBeFalse();
  });

  it('Se renderiza el objeto de cursos cuando clickeo el boton del formulario', () => {
    const formulario = component.formularioCurso;
    const nombre = formulario.controls['nombre'];
    const comision = formulario.controls['comision'];

    nombre.setValue('Java');
    comision.setValue('12345');

    const boton = fixture.debugElement.query(By.css('#btnAgregar'))
    boton.nativeElement.click();
    fixture.detectChanges();

    const listaCursosRef = fixture.debugElement.query(By.css('#cursos'));

    expect(listaCursosRef).toBeTruthy();
  });
});
