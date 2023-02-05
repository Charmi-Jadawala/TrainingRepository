import { TestBed } from '@angular/core/testing';

import { HttppostsService } from './httpposts.service';

describe('HttppostsService', () => {
  let service: HttppostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttppostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
