import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolIndiceComponent } from './rol-indice.component';

describe('RolIndiceComponent', () => {
  let component: RolIndiceComponent;
  let fixture: ComponentFixture<RolIndiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolIndiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolIndiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
