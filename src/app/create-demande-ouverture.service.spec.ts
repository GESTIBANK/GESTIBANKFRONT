import { TestBed } from '@angular/core/testing';

import { CreateDemandeOuvertureService } from './create-demande-ouverture.service';

describe('CreateDemandeOuvertureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDemandeOuvertureService = TestBed.get(CreateDemandeOuvertureService);
    expect(service).toBeTruthy();
  });
});
