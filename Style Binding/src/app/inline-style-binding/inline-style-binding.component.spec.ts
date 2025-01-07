import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleBindingComponent } from './inline-style-binding.component';

describe('InlineStyleBindingComponent', () => {
  let component: InlineStyleBindingComponent;
  let fixture: ComponentFixture<InlineStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineStyleBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
