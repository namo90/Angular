import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { LoginServiceService } from './login-service.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mocHttpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[LoginServiceService]
    });
    guard = TestBed.inject(AuthGuard);
    httpMock=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be canactive', () => {
    expect(guard.canActivate).toBeTruthy();
  });
});
