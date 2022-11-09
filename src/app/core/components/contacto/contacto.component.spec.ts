import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponent } from './contacto.component';

describe('Puebas Unitarias de ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea ContactoComponent', () => {
    expect(component).toBeTruthy();
  });
});
