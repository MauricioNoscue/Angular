import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormModuleComponent } from './crear-form-module.component';

describe('CrearFormModuleComponent', () => {
  let component: CrearFormModuleComponent;
  let fixture: ComponentFixture<CrearFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
