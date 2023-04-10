import { TestBed } from '@angular/core/testing';

import { ProductsarrayService } from './productsarray.service';

describe('ProductsarrayService', () => {
  let service: ProductsarrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsarrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
