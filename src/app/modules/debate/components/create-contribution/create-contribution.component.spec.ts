import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContributionComponent } from './create-contribution.component';

describe('CreateContributionComponent', () => {
  let component: CreateContributionComponent;
  let fixture: ComponentFixture<CreateContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateContributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
