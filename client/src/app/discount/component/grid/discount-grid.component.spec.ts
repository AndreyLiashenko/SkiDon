import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountGridComponent } from './discount-grid.component';

describe('DiscountGridComponent', () => {
  let component: DiscountGridComponent;
  let fixture: ComponentFixture<DiscountGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
