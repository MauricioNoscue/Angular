import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCrearComponent } from './module-crear.component';

describe('ModuleCrearComponent', () => {
  let component: ModuleCrearComponent;
  let fixture: ComponentFixture<ModuleCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
