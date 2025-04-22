import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceRolUserComponent } from './indice-rol-user.component';

describe('IndiceRolUserComponent', () => {
  let component: IndiceRolUserComponent;
  let fixture: ComponentFixture<IndiceRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
