import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPefilProfeComponent } from './editar-pefil-profe.component';

describe('EditarPefilProfeComponent', () => {
  let component: EditarPefilProfeComponent;
  let fixture: ComponentFixture<EditarPefilProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPefilProfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPefilProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
