import { async, TestBed } from '@angular/core/testing';
import { ApiAuthorizationModule } from './api-authorization.module';

describe('ApiAuthorizationModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ApiAuthorizationModule]
        }).compileComponents();
    }));

    it('should create an instance', () => {
        const apiAuthorizationModule = TestBed.get(ApiAuthorizationModule);
        expect(apiAuthorizationModule).toBeTruthy();
    });
});