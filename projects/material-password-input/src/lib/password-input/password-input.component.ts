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
    @Input() errorsMap;
    passwordForm: FormGroup;
    showPwd: boolean;
    
    ngOnInit(): void {
        this.passwordForm = this.group;
    }
}
