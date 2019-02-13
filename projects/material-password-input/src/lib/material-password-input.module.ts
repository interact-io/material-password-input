import { NgModule } from '@angular/core';
import { PasswordInputComponent } from './password-input/password-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [PasswordInputComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [PasswordInputComponent]
})
export class MaterialPasswordInputModule { }
