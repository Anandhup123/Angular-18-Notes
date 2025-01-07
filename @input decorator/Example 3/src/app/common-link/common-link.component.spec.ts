import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLinkComponent } from './common-link.component';

describe('CommonLinkComponent', () => {
  let component: CommonLinkComponent;
  let fixture: ComponentFixture<CommonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
