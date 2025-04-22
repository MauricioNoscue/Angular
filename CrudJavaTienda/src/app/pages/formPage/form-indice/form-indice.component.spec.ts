import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndiceComponent } from './form-indice.component';

describe('FormIndiceComponent', () => {
  let component: FormIndiceComponent;
  let fixture: ComponentFixture<FormIndiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIndiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIndiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
