import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from './authorize.interceptor';

describe('AuthorizeInterceptor', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthorizeInterceptor,
                    multi: true
                }
            ]
        });
    });

    it('should be created', () => {
        const interceptor = TestBed.inject(AuthorizeInterceptor);
        expect(interceptor).toBeTruthy();
    });
});