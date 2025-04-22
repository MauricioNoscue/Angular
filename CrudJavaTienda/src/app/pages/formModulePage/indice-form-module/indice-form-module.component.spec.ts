import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceFormModuleComponent } from './indice-form-module.component';

describe('IndiceFormModuleComponent', () => {
  let component: IndiceFormModuleComponent;
  let fixture: ComponentFixture<IndiceFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
