import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisionIndiceComponent } from './permision-indice.component';

describe('PermisionIndiceComponent', () => {
  let component: PermisionIndiceComponent;
  let fixture: ComponentFixture<PermisionIndiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisionIndiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisionIndiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
