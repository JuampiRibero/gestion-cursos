import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlumnosComponent } from './tabla-alumnos.component';

describe('Puebas Unitarias de TablaAlumnosComponent', () => {
  let component: TablaAlumnosComponent;
  let fixture: ComponentFixture<TablaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea TablaAlumnosComponent', () => {
    expect(component).toBeTruthy();
  });
});
