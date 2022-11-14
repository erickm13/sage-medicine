import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCitaUserComponent } from './view-cita-user.component';

describe('ViewCitaUserComponent', () => {
  let component: ViewCitaUserComponent;
  let fixture: ComponentFixture<ViewCitaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCitaUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCitaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
