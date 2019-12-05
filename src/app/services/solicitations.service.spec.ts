import { TestBed } from '@angular/core/testing';

import { SolicitationsService } from './solicitations.service';

describe('SolicitationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitationsService = TestBed.get(SolicitationsService);
    expect(service).toBeTruthy();
  });
});
