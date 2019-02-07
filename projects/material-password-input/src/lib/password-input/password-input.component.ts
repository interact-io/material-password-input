import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'intr-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {
    @Input() group: FormGroup;
    @Input() controlName: string;
    @Input() placeholder: string;
    passwordForm: FormGroup;
    showPwd: boolean;
    errorsMap = {
        'required': 'COMMON.REQUIRED',
        'pattern': 'AUTHENTICATION_NS.FORGOT_PASSWORD.PASSWORD_VALIDATION',
        'minLength': 'AUTHENTICATION_NS.FORGOT_PASSWORD.PASSWORD_VALIDATION',
        'invalidCredentials': 'AUTHENTICATION_NS.INVALID_CREDENTIALS',
        'matchPassword': 'AUTHENTICATION_NS.PASSWORD_MISMATCH'
    };
    
    ngOnInit(): void {
        this.passwordForm = this.group;
    }
}
