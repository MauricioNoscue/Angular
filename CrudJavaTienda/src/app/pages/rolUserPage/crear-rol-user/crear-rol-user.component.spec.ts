import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRolUserComponent } from './crear-rol-user.component';

describe('CrearRolUserComponent', () => {
  let component: CrearRolUserComponent;
  let fixture: ComponentFixture<CrearRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
