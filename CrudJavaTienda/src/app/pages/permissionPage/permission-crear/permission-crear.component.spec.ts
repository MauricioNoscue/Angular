import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionCrearComponent } from './permission-crear.component';

describe('PermissionCrearComponent', () => {
  let component: PermissionCrearComponent;
  let fixture: ComponentFixture<PermissionCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
