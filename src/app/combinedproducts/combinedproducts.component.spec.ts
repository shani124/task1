import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedproductsComponent } from './combinedproducts.component';

describe('CombinedproductsComponent', () => {
  let component: CombinedproductsComponent;
  let fixture: ComponentFixture<CombinedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
