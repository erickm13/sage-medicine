import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailDoctorComponent } from './verify-email-doctor.component';

describe('VerifyEmailDoctorComponent', () => {
  let component: VerifyEmailDoctorComponent;
  let fixture: ComponentFixture<VerifyEmailDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyEmailDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEmailDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
