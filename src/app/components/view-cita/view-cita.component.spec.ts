import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCitaComponent } from './view-cita.component';

describe('ViewCitaComponent', () => {
  let component: ViewCitaComponent;
  let fixture: ComponentFixture<ViewCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
