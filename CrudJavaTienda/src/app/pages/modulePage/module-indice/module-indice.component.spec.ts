import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleIndiceComponent } from './module-indice.component';

describe('ModuleIndiceComponent', () => {
  let component: ModuleIndiceComponent;
  let fixture: ComponentFixture<ModuleIndiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleIndiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleIndiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
