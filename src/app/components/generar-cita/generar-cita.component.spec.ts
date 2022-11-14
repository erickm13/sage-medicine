import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCitaComponent } from './generar-cita.component';

describe('GenerarCitaComponent', () => {
  let component: GenerarCitaComponent;
  let fixture: ComponentFixture<GenerarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
