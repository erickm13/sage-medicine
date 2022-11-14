import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasDoctorComponent } from './citas-doctor.component';

describe('CitasDoctorComponent', () => {
  let component: CitasDoctorComponent;
  let fixture: ComponentFixture<CitasDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
