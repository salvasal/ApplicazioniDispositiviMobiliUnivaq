import { TestBed } from '@angular/core/testing';

import { RicettaService } from './ricetta.service';

describe('RicettaService', () => {
  let service: RicettaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicettaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
