import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPasswordDirective } from './mat-password.directive';
import { PasswordShowToggleComponent } from './password-show-toggle/password-show-toggle.component';

@NgModule({
    declarations: [MatPasswordDirective, PasswordShowToggleComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [MatPasswordDirective],
    entryComponents: [PasswordShowToggleComponent]
})
export class MaterialPasswordInputModule { }
