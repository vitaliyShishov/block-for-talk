import { TestBed } from '@angular/core/testing';

import { ApiCallService } from './services/api-call.service';

describe('ApiCallService', () => {
  let service: ApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
