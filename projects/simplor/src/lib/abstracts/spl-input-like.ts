import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { SplElementAccessor } from '../interfaces/spl-element-accessor';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Nullable } from '../utils/type.util';
import { isPlatformBrowser } from '@angular/common';

/**
 * This is an abstract Directive that can be applied to elements with a form similar to the <input/> element.
 * This binds the '.spl-disabled' class to the host element according to the change of the element's disabled attribute, and defaults the spellcheck attribute to false.
 */
@Directive()
export abstract class SplInputLike<ElementType extends HTMLElement>
  implements SplElementAccessor<ElementType>, AfterContentInit, AfterViewInit, OnDestroy, ControlValueAccessor
{
  /** Bind the '.spl-disabled' class to the element according to the disabled state. */
  @HostBinding('class.spl-disabled') disabled = false;

  /** Sets the spellcheck attribute to false. */
  @HostBinding('attr.spellcheck') spellcheck = false;

  /**
   * This is the ElementRef of the host element.
   * Injected when creating a new instance.
   */
  elementRef: ElementRef<ElementType>;

  /** NgControl bound to the component. */
  ngControl: Nullable<NgControl> = null;

  /** Registered onChange callback function. */
  onChange: any;

  /** Registered onTouched callback function. */
  onTouched: any;

  /**
   * A MutationObserver that will detect the disabled attribute of the element.
   * When a View is initialized, it observes the host element.
   */
  protected _mutationObserver?: MutationObserver;

  protected _platformId: Object;

  protected constructor() {
    this._platformId = inject(PLATFORM_ID);
    this.elementRef = inject<ElementRef<ElementType>>(ElementRef);
    this.ngControl = inject(NgControl, { optional: true });

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterContentInit() {
    this.disabled = this.elementRef?.nativeElement.hasAttribute('disabled');
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this._mutationObserver = new MutationObserver((records) => {
        records.forEach((record) => {
          this.disabled = (record.target as HTMLElement).hasAttribute('disabled');
        });
      });
    }

    this._mutationObserver?.observe(this.elementRef.nativeElement, {
      attributes: true,
    });
  }

  ngOnDestroy() {
    this._mutationObserver?.disconnect();
  }

  /** Listen to the input event of the host element and pass the current value to the onChange callback function. */
  @HostListener('input')
  onHostInput(): void {
    if (this.onChange) {
      this.onChange((this.elementRef.nativeElement as any as HTMLInputElement | HTMLTextAreaElement).value);
    }
  }

  /** Listen to the blur event of the host element and execute the onTouched callback function. */
  @HostListener('blur')
  onHostFocus(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  /** Register the onChange callback function. */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /** Register the onTouched callback function. */
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  /**
   * Write the value entered into NgControl into the component.
   * @param obj - Value entered into NgControl.
   */
  writeValue(obj: any) {
    if (this.elementRef) {
      (this.elementRef.nativeElement as any as HTMLInputElement | HTMLTextAreaElement).value = obj;
    }
  }

  /**
   * Applies changes to the disable state to the component.
   * @param isDisabled - Changed disabled state.
   */
  setDisabledState(isDisabled: boolean) {
    if (this.elementRef) {
      (this.elementRef.nativeElement as any as HTMLInputElement | HTMLTextAreaElement).disabled = isDisabled;
    }
  }
}
