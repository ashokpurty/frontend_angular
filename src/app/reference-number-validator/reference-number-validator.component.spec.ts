import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceNumberValidatorComponent } from './reference-number-validator.component';

describe('ReferenceNumberValidatorComponent', () => {
  let component: ReferenceNumberValidatorComponent;
  let fixture: ComponentFixture<ReferenceNumberValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceNumberValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceNumberValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
