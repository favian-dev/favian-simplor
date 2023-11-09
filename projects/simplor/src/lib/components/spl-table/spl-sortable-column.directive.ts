import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { SplSortableColumnControlComponent } from './spl-sortable-column-control/spl-sortable-column-control.component';
import { SplElementAccessor } from '../../interfaces/spl-element-accessor';
import { SplEffectDirective } from '../spl-effect/spl-effect.directive';
import { SplSortableColumnWrapperComponent } from './spl-sortable-column-wrapper/spl-sortable-column-wrapper.component';
import { BooleanAttribute, Nullable } from '../../utils/type.util';
import { convertBooleanAttribute } from '../../utils/convert.util';

/**
 * Directive that displays an icon according to the sort direction in <th> and allows SplTableDirective
 * to emit a sortChange emitter when the host element is clicked.
 */
@Directive({
  selector: 'th[splSortableColumn]',
  host: {
    class: 'spl-sortable-column',
  },
  hostDirectives: [SplEffectDirective],
  standalone: true,
})
export class SplSortableColumnDirective implements AfterViewInit, SplElementAccessor<HTMLTableCellElement> {
  /**
   * Name to be used for SplTableSortChangeEvent.
   * It must be a unique value in table.
   */
  @Input({ required: true }) name!: string;

  /**
   * The emitter to which SplTableDirective will subscribe internally.
   * Emitted when the host element is clicked.
   */
  onClick = new EventEmitter<void>();

  /**
   * This is the ComponentRef of the wrapper component to display the icon according to the sort direction along with the content.
   * It is created after the view is initialized, and the content of the <th> element is moved into the wrapper component.
   */
  wrapperComponentRef: Nullable<ComponentRef<SplSortableColumnWrapperComponent>> = null;

  /**
   * This is a component that displays icons according to sort direction.
   * After the view is initialized, it is created in SplSortableColumnWrapperComponent.
   */
  controlComponentRef: Nullable<ComponentRef<SplSortableColumnControlComponent>> = null;

  constructor(
    public elementRef: ElementRef<HTMLTableCellElement>,
    private _viewContainerRef: ViewContainerRef,
    private _renderer: Renderer2,
  ) {}

  /** Whether to allow the value 'none' when changing the sort direction. */
  private _allowNoneDirection = false;

  /** Returns whether to allow the value 'none' when changing the sort direction. */
  @Input()
  get allowNoneDirection(): boolean {
    return this._allowNoneDirection;
  }

  /**
   * Sets whether to allow the value 'none' when changing the sort direction.
   * @param value - Whether to allow the value 'none' when changing the sort direction.
   */
  set allowNoneDirection(value: BooleanAttribute) {
    this._allowNoneDirection = convertBooleanAttribute(value);
  }

  ngAfterViewInit() {
    const childNodes = this.elementRef.nativeElement.childNodes;

    const wrapperComponentRef = this._viewContainerRef.createComponent(SplSortableColumnWrapperComponent);
    const controlComponentRef = this._viewContainerRef.createComponent(SplSortableColumnControlComponent);

    // Move every content to wrapperComponentRef.
    for (let i = 0; i < childNodes.length; i++) {
      const child = childNodes.item(i);

      this._renderer.appendChild(wrapperComponentRef.location.nativeElement, child);
    }

    this._renderer.appendChild(wrapperComponentRef.location.nativeElement, controlComponentRef.location.nativeElement);
    this._renderer.appendChild(this.elementRef.nativeElement, wrapperComponentRef.location.nativeElement);

    wrapperComponentRef.changeDetectorRef.detectChanges();
    controlComponentRef.changeDetectorRef.detectChanges();

    this.wrapperComponentRef = wrapperComponentRef;
    this.controlComponentRef = controlComponentRef;
  }

  /** Listen to the click event of the host element and emit an onClick emitter. */
  @HostListener('click')
  onHostClick(): void {
    this.onClick.emit();
  }
}
