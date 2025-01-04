import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDesignComponent } from './common-design.component';

describe('CommonDesignComponent', () => {
  let component: CommonDesignComponent;
  let fixture: ComponentFixture<CommonDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
