import { TestBed } from '@angular/core/testing';

import { FetchCardService } from './fetch-card.service';

describe('FetchCardService', () => {
  let service: FetchCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
