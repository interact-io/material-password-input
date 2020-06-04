# interact.io password input directive
## Dependencies:
* `@angular/core`: "9.1.9",
* `@angular/common`: "9.1.9",
* `@angular/animations`: "9.1.9",
* `@angular/cdk`: "^9.2.0",
* `@angular/material`: "^9.2.0"
## API:
* `intrMatPassword`: password input directive
* `intr-password-show-toggle`: password show/hide toggle component
## Usage:
* Use as a directive for `input` e.g: `<input intrMatPassword matInput [placeholder]='"enter new password"' [formControlName]='"password"' #passRef class="password-input"/>`
* Add password show/hide toggle as needed `<intr-password-show-toggle matSuffix></intr-password-show-toggle>`
## Author:
* lukasz@interact.io
* vu@interact.io
