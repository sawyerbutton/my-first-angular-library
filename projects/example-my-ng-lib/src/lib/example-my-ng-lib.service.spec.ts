import { TestBed } from '@angular/core/testing';

import { ExampleMyNgLibService } from './example-my-ng-lib.service';

describe('ExampleMyNgLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleMyNgLibService = TestBed.get(ExampleMyNgLibService);
    expect(service).toBeTruthy();
  });
});
