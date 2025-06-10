import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTextComponent } from './ai-text.component';

describe('AiTextComponent', () => {
  let component: AiTextComponent;
  let fixture: ComponentFixture<AiTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
