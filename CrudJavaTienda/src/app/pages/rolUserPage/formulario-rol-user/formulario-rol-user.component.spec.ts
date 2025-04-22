import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRolUserComponent } from './formulario-rol-user.component';

describe('FormularioRolUserComponent', () => {
  let component: FormularioRolUserComponent;
  let fixture: ComponentFixture<FormularioRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
