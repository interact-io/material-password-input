# interact.io password input directive
## Dependencies:
* `@angular/core`: "^8.1.2",
* `@angular/common`: "^8.1.2",
* `@angular/animations`: "^8.1.2",
* `@angular/cdk`: "8.1.1",
* `@angular/material`: "^8.1.1"
## API:
* `intrMatPassword`: password input directive
* `intr-password-show-toggle`: password show/hide toggle component
## Usage:
* Use as a directive for `input` e.g: `<input intrMatPassword matInput [placeholder]='"enter new password"' [formControlName]='"password"' #passRef class="password-input"/>`
* Add password show/hide toggle as needed `<intr-password-show-toggle matSuffix></intr-password-show-toggle>`
## Author:
* lukasz@interact.io
* vu@interact.io
