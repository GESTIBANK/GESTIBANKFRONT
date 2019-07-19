import { TestBed } from '@angular/core/testing';

import { AffectationDemandeConseillerService } from './affectation-demande-conseiller.service';

describe('AffectationDemandeConseillerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffectationDemandeConseillerService = TestBed.get(AffectationDemandeConseillerService);
    expect(service).toBeTruthy();
  });
});
