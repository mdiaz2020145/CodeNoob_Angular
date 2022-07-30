import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCursosAsignadosComponent } from './listar-cursos-asignados.component';

describe('ListarCursosAsignadosComponent', () => {
  let component: ListarCursosAsignadosComponent;
  let fixture: ComponentFixture<ListarCursosAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCursosAsignadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCursosAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
