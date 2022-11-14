import { TestBed } from '@angular/core/testing';

import { AlergiasService } from './alergias.service';

describe('AlergiasService', () => {
  let service: AlergiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlergiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
