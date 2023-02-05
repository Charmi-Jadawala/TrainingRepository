import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldClassLearningComponent } from './world-class-learning.component';

describe('WorldClassLearningComponent', () => {
  let component: WorldClassLearningComponent;
  let fixture: ComponentFixture<WorldClassLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldClassLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldClassLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
