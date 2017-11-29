import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarEstudianteComponent } from './importar-estudiante.component';

describe('ImportarEstudianteComponent', () => {
  let component: ImportarEstudianteComponent;
  let fixture: ComponentFixture<ImportarEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportarEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
