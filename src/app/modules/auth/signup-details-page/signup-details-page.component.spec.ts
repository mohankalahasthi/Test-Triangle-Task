import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDetailsPageComponent } from './signup-details-page.component';

describe('SignupDetailsPageComponent', () => {
  let component: SignupDetailsPageComponent;
  let fixture: ComponentFixture<SignupDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
