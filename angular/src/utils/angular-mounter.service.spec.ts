import { TestBed, inject } from '@angular/core/testing';

import { AngularMounterService } from './angular-mounter.service';

describe('AngularMounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularMounterService]
    });
  });

  it('should be created', inject([AngularMounterService], (service: AngularMounterService) => {
    expect(service).toBeTruthy();
  }));
});
