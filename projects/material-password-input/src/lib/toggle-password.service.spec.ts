import { TestBed } from '@angular/core/testing';

import { TogglePasswordService } from './toggle-password.service';

describe('TogglePasswordService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TogglePasswordService = TestBed.get(TogglePasswordService);
        expect(service).toBeTruthy();
    });
});
