import { TestBed } from '@angular/core/testing';

import { QAPIService } from './q-api.service';

describe('QAPIService', () => {
  let service: QAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
