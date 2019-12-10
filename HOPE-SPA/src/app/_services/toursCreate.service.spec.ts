/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToursCreateService } from './toursCreate.service';

describe('Service: ToursCreate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToursCreateService]
    });
  });

  it('should ...', inject([ToursCreateService], (service: ToursCreateService) => {
    expect(service).toBeTruthy();
  }));
});
