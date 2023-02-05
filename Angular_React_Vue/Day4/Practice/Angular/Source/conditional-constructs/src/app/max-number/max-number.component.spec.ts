import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxNumberComponent } from './max-number.component';

describe('MaxNumberComponent', () => {
  let component: MaxNumberComponent;
  let fixture: ComponentFixture<MaxNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
