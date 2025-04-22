import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGeneralComponent } from './editar-general.component';

describe('EditarGeneralComponent', () => {
  let component: EditarGeneralComponent;
  let fixture: ComponentFixture<EditarGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
