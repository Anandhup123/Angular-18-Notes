import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBlockComponent } from './common-block.component';

describe('CommonBlockComponent', () => {
  let component: CommonBlockComponent;
  let fixture: ComponentFixture<CommonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
