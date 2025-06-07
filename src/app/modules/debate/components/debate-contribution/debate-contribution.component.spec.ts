import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateContributionComponent } from './debate-contribution.component';

describe('DebateContributionComponent', () => {
  let component: DebateContributionComponent;
  let fixture: ComponentFixture<DebateContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebateContributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebateContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
