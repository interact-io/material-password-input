import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordShowToggleComponent } from './password-show-toggle.component';
import {MatIconModule} from '@angular/material/icon';

describe('PasswordShowToggleComponent', () => {
    let component: PasswordShowToggleComponent;
    let fixture: ComponentFixture<PasswordShowToggleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ PasswordShowToggleComponent ],
          imports: [MatIconModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordShowToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
