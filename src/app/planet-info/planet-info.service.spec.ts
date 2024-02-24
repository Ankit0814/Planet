/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanetOnfoService } from './planet-info.service';

describe('Service: PlanetOnfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetOnfoService]
    });
  });

  it('should ...', inject([PlanetOnfoService], (service: PlanetOnfoService) => {
    expect(service).toBeTruthy();
  }));
});
