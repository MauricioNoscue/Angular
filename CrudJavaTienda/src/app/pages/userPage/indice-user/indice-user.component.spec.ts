import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceUserComponent } from './indice-user.component';

describe('IndiceUserComponent', () => {
  let component: IndiceUserComponent;
  let fixture: ComponentFixture<IndiceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
