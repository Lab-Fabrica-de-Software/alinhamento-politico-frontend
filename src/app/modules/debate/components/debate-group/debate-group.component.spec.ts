import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateGroupComponent } from './debate-group.component';

describe('DebateGroupComponent', () => {
  let component: DebateGroupComponent;
  let fixture: ComponentFixture<DebateGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebateGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebateGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
