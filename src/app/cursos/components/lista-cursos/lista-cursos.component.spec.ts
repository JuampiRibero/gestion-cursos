import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { ListaCursosComponent } from './lista-cursos.component';

describe('Puebas Unitarias de  ListaCursosComponent', () => {
  let component: ListaCursosComponent;
  let fixture: ComponentFixture<ListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCursosComponent],
      imports: [ AppModule ],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea ListaCursosComponent', () => {
    expect(component).toBeTruthy();
  });
});
