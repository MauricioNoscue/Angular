import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormModuleComponent } from './editar-form-module.component';

describe('EditarFormModuleComponent', () => {
  let component: EditarFormModuleComponent;
  let fixture: ComponentFixture<EditarFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
