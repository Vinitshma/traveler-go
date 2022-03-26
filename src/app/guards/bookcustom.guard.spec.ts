import { TestBed } from '@angular/core/testing';

import { BookcustomGuard } from './bookcustom.guard';

describe('BookcustomGuard', () => {
  let guard: BookcustomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookcustomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
