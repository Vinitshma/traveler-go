import { TestBed } from '@angular/core/testing';

import { UserWishGuard } from './user-wish.guard';

describe('UserWishGuard', () => {
  let guard: UserWishGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserWishGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
