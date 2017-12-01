import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarNotasComponent } from './importar-notas.component';

describe('ImportarNotasComponent', () => {
  let component: ImportarNotasComponent;
  let fixture: ComponentFixture<ImportarNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportarNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});