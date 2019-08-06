import { Component, HostListener } from '@angular/core';
import { TogglePasswordService } from '../toggle-password.service';

@Component({
    selector: 'intr-password-show-toggle',
    templateUrl: './password-show-toggle.component.html',
    styleUrls: ['./password-show-toggle.component.css']
})
export class PasswordShowToggleComponent {
    showPwd = false;

    constructor(private togglePassword: TogglePasswordService) { }

    @HostListener('click')
    onClick() {
        this.showPwd = !this.showPwd;
        this.togglePassword.showPassword.next(this.showPwd);
    }
}
