import { TestBed } from '@angular/core/testing';

import { OskService } from './osk.service';

describe('OskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OskService = TestBed.get(OskService);
    expect(service).toBeTruthy();
  });
});
