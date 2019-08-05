import {
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    forwardRef, HostListener,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordShowToggleComponent } from './password-show-toggle/password-show-toggle.component';
import { TogglePasswordService } from './toggle-password.service';

@Directive({
    selector: '[intrMatPassword]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MatPasswordDirective),
            multi: true
        }
    ]
})
export class MatPasswordDirective implements ControlValueAccessor, OnInit {
    private readonly password = 'password';
    private readonly text = 'text';

    disabled: boolean;
    onChange = (value: any) => {};
    onTouch = (value: any) => {};

    @HostListener('click') onClick() {
        this.onTouch(this.value);
    }

    @HostListener('input') onInput() {
        this.onChange(this.elRef.nativeElement.value);
    }

    constructor(
        private resolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private elRef: ElementRef,
        private togglePasswordService: TogglePasswordService
    ) {
        this.elRef.nativeElement.type = this.password;
    }

    set value(value) {
        this.onChange(value);
        this.onTouch(value);
    }

    ngOnInit(): void {
        const factory = this.resolver.resolveComponentFactory(PasswordShowToggleComponent);
        const resolvedComponent = factory.create(this.viewContainerRef.parentInjector);
        this.viewContainerRef.insert(resolvedComponent.hostView);
        this.togglePasswordService.showPassword.subscribe(showPass => {
            this.elRef.nativeElement.type = showPass ? this.text : this.password;
        })
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this.elRef.nativeElement.disabled = this.disabled;
    }

    writeValue(value: string): void {
        this.value = value;
        this.onChange(value);
    }

}
