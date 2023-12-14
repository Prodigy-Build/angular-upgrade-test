import { TestBed } from '@angular/core/testing';

import { GenericValidator } from './generic-validator';

describe('GenericValidator', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericValidator = TestBed.get(GenericValidator);
    expect(service).toBeTruthy();
  });
});