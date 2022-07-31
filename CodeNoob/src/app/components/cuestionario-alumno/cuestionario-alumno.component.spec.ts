import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioAlumnoComponent } from './cuestionario-alumno.component';

describe('CuestionarioAlumnoComponent', () => {
  let component: CuestionarioAlumnoComponent;
  let fixture: ComponentFixture<CuestionarioAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionarioAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
