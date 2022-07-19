import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionLoginComponent } from './eleccion-login.component';

describe('EleccionLoginComponent', () => {
  let component: EleccionLoginComponent;
  let fixture: ComponentFixture<EleccionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleccionLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
