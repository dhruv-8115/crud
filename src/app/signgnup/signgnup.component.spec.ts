import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigngnupComponent } from './signgnup.component';

describe('SigngnupComponent', () => {
  let component: SigngnupComponent;
  let fixture: ComponentFixture<SigngnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigngnupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigngnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
