import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateFilterComponent } from './debate-filter.component';

describe('DebateFilterComponent', () => {
  let component: DebateFilterComponent;
  let fixture: ComponentFixture<DebateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebateFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
