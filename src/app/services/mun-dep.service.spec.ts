import { TestBed } from '@angular/core/testing';

import { MunDepService } from './mun-dep.service';

describe('MunDepService', () => {
  let service: MunDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
