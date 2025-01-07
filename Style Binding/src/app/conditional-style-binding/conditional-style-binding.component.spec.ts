import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalStyleBindingComponent } from './conditional-style-binding.component';

describe('ConditionalStyleBindingComponent', () => {
  let component: ConditionalStyleBindingComponent;
  let fixture: ComponentFixture<ConditionalStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalStyleBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
