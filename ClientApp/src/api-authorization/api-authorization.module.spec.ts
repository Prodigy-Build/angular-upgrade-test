import { TestBed } from '@angular/core/testing';
import { ApiAuthorizationModule } from './api-authorization.module';

describe('ApiAuthorizationModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiAuthorizationModule],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const module = TestBed.inject(ApiAuthorizationModule);
    expect(module).toBeTruthy();
  });
});