import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CursoService } from './curso.service';
import { of } from 'rxjs';

describe('Puebas Unitarias de CursoService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: CursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, HttpClientTestingModule],
      providers: [],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursoService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un arreglo de cursos mockeados', (done: DoneFn) => {
    const mockDatos = [
      {
        id: 1,
        nombre: 'Angular',
        comision: '32320',
        profesor: 'Abner',
        fechaInicio: new Date(2022, 9, 13),
        fechaFin: new Date(2022, 11, 10),
        inscripcionAbierta: true,
        imagen:
          'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
        alumnos:[]
      },
      {
        id: 1,
        nombre: 'Angular',
        comision: '32320',
        profesor: 'Abner',
        fechaInicio: new Date(2022, 9, 13),
        fechaFin: new Date(2022, 11, 10),
        inscripcionAbierta: true,
        imagen:
          'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
        alumnos:[]
      },
      {
        id: 1,
        nombre: 'Angular',
        comision: '32320',
        profesor: 'Abner',
        fechaInicio: new Date(2022, 9, 13),
        fechaFin: new Date(2022, 11, 10),
        inscripcionAbierta: true,
        imagen:
          'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
        alumnos:[]
      }
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerCursos().subscribe((cursos) => {
      const mockDatos2 = [
        {
          id: 1,
          nombre: 'Angular',
          comision: '32320',
          profesor: 'Abner',
          fechaInicio: new Date(2022, 9, 13),
          fechaFin: new Date(2022, 11, 10),
          inscripcionAbierta: true,
          imagen:
            'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
          alumnos:[]
        },
        {
          id: 1,
          nombre: 'Angular',
          comision: '32320',
          profesor: 'Abner',
          fechaInicio: new Date(2022, 9, 13),
          fechaFin: new Date(2022, 11, 10),
          inscripcionAbierta: true,
          imagen:
            'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
            alumnos:[]
        },
        {
          id: 1,
          nombre: 'Angular',
          comision: '32320',
          profesor: 'Abner',
          fechaInicio: new Date(2022, 9, 13),
          fechaFin: new Date(2022, 11, 10),
          inscripcionAbierta: true,
          imagen:
            'https://img.freepik.com/foto-gratis/encendido-computadora-portatil-gris_400718-47.jpg?w=1060&t=st=1663708656~exp=1663709256~hmac=41ed7dd4523308f9f9c145e5fe12aecfbd21619ad28f2c1988b896458dcda35a',
            alumnos:[]
        }
      ];
      expect(cursos).toEqual(mockDatos2);
      done();
    });
  });
});
