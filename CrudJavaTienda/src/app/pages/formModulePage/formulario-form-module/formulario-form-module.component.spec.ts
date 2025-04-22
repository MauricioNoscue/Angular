import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFormModuleComponent } from './formulario-form-module.component';

describe('FormularioFormModuleComponent', () => {
  let component: FormularioFormModuleComponent;
  let fixture: ComponentFixture<FormularioFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
