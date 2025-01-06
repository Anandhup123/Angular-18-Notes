import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBlocksComponent } from './common-blocks.component';

describe('CommonBlocksComponent', () => {
  let component: CommonBlocksComponent;
  let fixture: ComponentFixture<CommonBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
