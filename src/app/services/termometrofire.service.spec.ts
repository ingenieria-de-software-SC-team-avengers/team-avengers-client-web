import { TestBed } from '@angular/core/testing';

import { TermometrofireService } from './termometrofire.service';

describe('TermometrofireService', () => {
  let service: TermometrofireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermometrofireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
