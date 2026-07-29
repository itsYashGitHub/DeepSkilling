import { TestBed } from '@angular/core/testing';
import { CanActivateFn, provideRouter } from '@angular/router';

import { authGuard } from './auth-guard';
import { Auth } from '../services/auth';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow access when logged in', () => {
    const auth = TestBed.inject(Auth);
    auth.isLoggedIn = true;
    const result = executeGuard({} as any, {} as any);
    expect(result).toBeTrue();
  });

  it('should deny access when not logged in', () => {
    const auth = TestBed.inject(Auth);
    auth.isLoggedIn = false;
    const result = executeGuard({} as any, {} as any);
    expect(result).toBeFalse();
  });
});
