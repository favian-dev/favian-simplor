import {
  AfterContentInit,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { SplElementAccessor } from '../../interfaces/spl-element-accessor';
import { SplThemeAttribute } from '../../interfaces/spl-theme-attribute';
import { SplEffectOverlayComponent } from './spl-effect-overlay/spl-effect-overlay.component';
import { BooleanAttribute, Nullable, SplTheme } from '../../utils/type.util';
import { SplLogger } from '../../utils/logger.util';
import { convertBooleanAttribute } from '../../utils/convert.util';

/**
 * This is a Directive that adds hover and active effects to the host element.
 * The effect can also be displayed by keydown, and the effect is displayed in different colors depending on the 'theme'.
 */
@Directive({
  selector: '[splEffect]',
  standalone: true,
  host: {
    class: 'spl-effect',
  },
  providers: [SplEffectOverlayComponent],
})
export class SplEffectDirective implements SplElementAccessor<HTMLElement>, SplThemeAttribute, AfterContentInit {
  /** Sets the theme color of the effect. */
  @Input() theme: SplTheme = 'none';

  /**
   * This is the position style of the host element that will display the effect.
   * If the position of the host element is not 'static', the current position style value is used,
   * but if it is 'static', the 'relative' value is bound.
   */
  @HostBinding('style.position') position: Nullable<string> = null;

  /**
   * This is the overflow style of the host element that will display the effect.
   * If the overflow of the host element is not 'visible', the current overflow style value is used,
   * but if it is 'visible', the 'hidden' value is bound.
   */
  @HostBinding('style.overflow') overflow: Nullable<string> = null;

  /** The ElementRef of the host element. */
  elementRef: ElementRef<HTMLElement>;

  /** The logger of SplEffectDirective. */
  private readonly _logger = new SplLogger('SplEffectDirective');

  /**
   * This is the focused state of the host element.
   * If this is true, no additional effects are created when pointerenter event occurs.
   */
  private _focused = false;

  /** This is the ComponentRef of SplEffectOverlayComponent added when a focus or pointerenter event occurs. */
  private _focusEffectOverlay?: ComponentRef<SplEffectOverlayComponent>;

  /** This is the ComponentRef of SplEffectOverlayComponent added when a pointerdown event occurs. */
  private _activeEffectOverlay?: ComponentRef<SplEffectOverlayComponent>;

  /** ViewContainerRef of the host element for creating SplEffectOverlayComponent. */
  private _viewContainerRef: ViewContainerRef;

  /** This is an Injected renderer. */
  private _renderer: Renderer2;

  constructor() {
    this.elementRef = inject(ElementRef);
    this._viewContainerRef = inject(ViewContainerRef);
    this._renderer = inject(Renderer2);
  }

  /**
   * This is the disabled state of the effect.
   * If this is true, the effect according to the event will not be displayed.
   */
  private _disableEffect = false;

  /**
   * Returns the disabled state of the effect.
   * Also, if the host element has the 'disabled' attribute, it returns true.
   */
  @Input()
  get disableEffect(): boolean {
    return this._disableEffect || this.elementRef.nativeElement.hasAttribute('disabled');
  }

  /**
   * Sets the disabled state of the effect.
   * @param value - Disabled state to set.
   */
  set disableEffect(value: BooleanAttribute) {
    this._disableEffect = convertBooleanAttribute(value);
    this._logger.debug('SetDisableEffect', this._disableEffect);
  }

  ngAfterContentInit(): void {
    this._setInitialPosition();
    this._setInitialOverflow();
  }

  /** Listen to the focus event and display the hover effect. */
  @HostListener('focus')
  onFocus(): void {
    this._focused = true;
    this.onPointerEnter();
  }

  /** Remove hover and active effects by listening to the blur event. */
  @HostListener('blur')
  onBlur(): void {
    this._focused = false;
    this.onPointerLeave();
  }

  /** Listen to the 'enter' keydown event and display the active effect. */
  @HostListener('keydown.enter')
  onEnterKeyDown(): void {
    this.onPointerDown();
  }

  /** Remove the active effect by listening to the 'enter' keyup event. */
  @HostListener('keyup.enter')
  onEnterKeyUp(): void {
    this.onPointerUp();
  }

  /** Listen to the 'space' keydown event and display the active effect. */
  @HostListener('keydown.space')
  onSpaceKeyDown(): void {
    this.onPointerDown();
  }

  /** Remove the active effect by listening to the 'space' keyup event. */
  @HostListener('keyup.space')
  onSpaceKeyUp(): void {
    this.onPointerUp();
  }

  /** Listen to the pointerenter event to display the hover effect. */
  @HostListener('pointerenter')
  onPointerEnter(): void {
    if (this._focusEffectOverlay || this.disableEffect) {
      return;
    }

    this._focusEffectOverlay = this._viewContainerRef.createComponent(SplEffectOverlayComponent);

    this._focusEffectOverlay.instance.theme = this.theme;
    this._focusEffectOverlay.changeDetectorRef.detectChanges();

    this._logger.debug('FocusEffectOverlay created');
    this._logger.debug('SplEffect theme', this._focusEffectOverlay.instance.theme);
    this._logger.debug('FocusEffectOverlay theme', this._focusEffectOverlay.instance.theme);

    this._renderer.appendChild(this.elementRef.nativeElement, this._focusEffectOverlay.location.nativeElement);
  }

  /** Listen to the pointerdown event to display the active effect. */
  @HostListener('pointerdown')
  onPointerDown(): void {
    if (this._activeEffectOverlay || this.disableEffect) {
      return;
    }

    this._activeEffectOverlay = this._viewContainerRef.createComponent(SplEffectOverlayComponent);

    this._activeEffectOverlay.instance.theme = this.theme;
    this._activeEffectOverlay.instance.active = true;
    this._activeEffectOverlay.changeDetectorRef.detectChanges();

    this._logger.debug('ActiveEffectOverlay created');
    this._logger.debug('SplEffect theme', this._activeEffectOverlay.instance.theme);
    this._logger.debug('ActiveEffectOverlay theme', this._activeEffectOverlay.instance.theme);

    this._renderer.appendChild(this.elementRef.nativeElement, this._activeEffectOverlay.location.nativeElement);
  }

  /** Remove the active effect by listening to the pointerup event. */
  @HostListener('pointerup')
  onPointerUp(): void {
    this._activeEffectOverlay?.destroy();
    delete this._activeEffectOverlay;
  }

  /** Remove hover and active effects by listening to the pointerleave event. */
  @HostListener('pointerleave')
  onPointerLeave(): void {
    if (!this._focused) {
      this._focusEffectOverlay?.destroy();
      delete this._focusEffectOverlay;
    }

    this._activeEffectOverlay?.destroy();
    delete this._activeEffectOverlay;
  }

  /**
   * Sets the position style of the host element.
   * If the CSS position value of the host element is an empty string or 'static', 'relative' is used.
   * Otherwise, the current CSS position value is used as is.
   */
  private _setInitialPosition(): void {
    const initialPosition = getComputedStyle(this.elementRef.nativeElement).getPropertyValue('position');

    if (initialPosition === '' || initialPosition === 'static') {
      this.position = 'relative';
    } else {
      this.position = initialPosition;
    }
  }

  /**
   * Sets the overflow style of the host element.
   * If the CSS overflow value of the host element is an empty string or 'visible', 'hidden' is used.
   * Otherwise, the current CSS overflow value is used as is.
   */
  private _setInitialOverflow(): void {
    const initialOverflow = getComputedStyle(this.elementRef.nativeElement).getPropertyValue('overflow');

    if (initialOverflow === '' || initialOverflow === 'visible') {
      this.overflow = 'hidden';
    } else {
      this.overflow = initialOverflow;
    }
  }
}
