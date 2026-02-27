import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallTrackerComponent } from './ball-tracker.component';

describe('BallTrackerComponent', () => {
  let component: BallTrackerComponent;
  let fixture: ComponentFixture<BallTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BallTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
