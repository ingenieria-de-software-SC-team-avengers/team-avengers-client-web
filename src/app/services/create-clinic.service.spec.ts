import { TestBed } from '@angular/core/testing';

import { CreateClinicService } from './create-clinic.service';

describe('CreateClinicService', () => {
  let service: CreateClinicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateClinicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
