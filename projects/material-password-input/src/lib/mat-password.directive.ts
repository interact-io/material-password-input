import {
    ComponentFactoryResolver,
    Directive, DoCheck,
    ElementRef,
    forwardRef, HostBinding, HostListener, Injector, Input, OnDestroy,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { PasswordShowToggleComponent } from './password-show-toggle/password-show-toggle.component';
import { TogglePasswordService } from './toggle-password.service';
import { MatFormField, MatFormFieldControl, MatInput } from '@angular/material';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
    selector: '[intrMatPassword]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MatPasswordDirective),
            multi: true
        },
        {
            provide: MatFormFieldControl,
            useExisting: MatPasswordDirective
        }
    ],
    host: {
        '[id]': 'id',
        '[attr.aria-describedby]': 'describedBy'
    }
})
export class MatPasswordDirective implements ControlValueAccessor, OnInit, MatFormFieldControl<any>, OnDestroy, DoCheck {
    stateChanges = new Subject<void>();
    controlType = 'matPasswordInput';
    ngControl;
    focused = false;
    errorState = false;

    @HostBinding('attr.aria-describedby') describedBy = '';
    setDescribedByIds(ids: string[]) {
        this.describedBy = ids.join(' ');
    }

    onContainerClick(event: MouseEvent) {
        if ((event.target as Element).tagName.toLowerCase() != 'input' && this.elRef.nativeElement.querySelector('input')) {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }

    private readonly password = 'password';
    private readonly text = 'text';

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
        private togglePasswordService: TogglePasswordService,
        private injector: Injector,
        private fm: FocusMonitor
    ) {
        this.elRef.nativeElement.type = this.password;
        fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }

    @Input()
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }
    public _placeholder: string;

    @Input()
    get required() {
        return this._required;
    }
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    public _required = false;

    @Input()
    get disabled() {
        return this._disabled;
    }
    set disabled(dis) {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }
    public _disabled = false;

    static nextId = 0;
    @HostBinding() id = `mat-password-directive-${MatPasswordDirective.nextId++}`;

    get empty() {
        const text = this.elRef.nativeElement.value.trim();
        return !text;
    }

    @HostBinding('class.floating')
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }

    set value(value) {
        this.onChange(value);
        this.onTouch(value);
    }

    ngOnInit(): void {
        this.togglePasswordService.showPassword.subscribe(showPass => {
            this.elRef.nativeElement.type = showPass ? this.text : this.password;
        });

        this.ngControl = this.injector.get(NgControl);
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }

    ngOnDestroy(): void {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
    }

    ngDoCheck(): void {
        if(this.ngControl) {
            this.errorState = this.ngControl.invalid && this.ngControl.touched;
            this.stateChanges.next();
        }
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
