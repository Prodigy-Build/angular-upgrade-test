import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthorizeGuard } from './authorize.guard';

describe('AuthorizeGuard', () => {
  let guard: AuthorizeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [AuthorizeGuard]
    });

    guard = TestBed.inject(AuthorizeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});