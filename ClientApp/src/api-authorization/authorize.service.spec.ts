import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthorizeService } from './authorize.service';

describe('AuthorizeService', () => {
  let service: AuthorizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorizeService]
    });
    service = TestBed.inject(AuthorizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});