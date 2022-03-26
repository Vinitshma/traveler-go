import { TestBed } from '@angular/core/testing';

import { BookheadGuard } from './bookhead.guard';

describe('BookheadGuard', () => {
  let guard: BookheadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookheadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
