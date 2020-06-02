import { TestBed } from '@angular/core/testing';

import { HardwareDetService } from './hardware-det.service';

describe('HardwareDetService', () => {
  let service: HardwareDetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwareDetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
