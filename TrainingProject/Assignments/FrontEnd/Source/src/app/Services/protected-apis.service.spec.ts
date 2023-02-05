import { TestBed } from '@angular/core/testing';

import { ProtectedAPIsService } from './protected-apis.service';

describe('ProtectedAPIsService', () => {
  let service: ProtectedAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectedAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
