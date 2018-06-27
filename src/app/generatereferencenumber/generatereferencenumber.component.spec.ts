import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratereferencenumberComponent } from './generatereferencenumber.component';

describe('GeneratereferencenumberComponent', () => {
  let component: GeneratereferencenumberComponent;
  let fixture: ComponentFixture<GeneratereferencenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratereferencenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratereferencenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
