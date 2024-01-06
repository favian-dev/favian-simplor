import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  DestroyRef,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SplFormFieldItemComponent } from './spl-form-field-item/spl-form-field-item.component';

/** This is a Component that creates a form field consisting of label, control, error, and hint. */
@Component({
  selector: 'spl-form-field',
  templateUrl: './spl-form-field.component.html',
  host: {
    class: 'spl-form-field',
  },
  standalone: true,
  imports: [CommonModule],
})
export class SplFormFieldComponent implements AfterContentInit, AfterViewInit {
  @ViewChild('formFieldItems', { read: ElementRef }) formFieldItems!: ElementRef<HTMLElement>;

  @ContentChildren(SplFormFieldItemComponent, { descendants: true })
  formFieldItemQueryList!: QueryList<SplFormFieldItemComponent>;

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _destroyRef: DestroyRef,
  ) {}

  ngAfterContentInit() {
    this.formFieldItemQueryList.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.moveFormFieldItems();
    });
  }

  ngAfterViewInit() {
    this.moveFormFieldItems();
  }

  moveFormFieldItems(): void {
    if (this.formFieldItems) {
      const formFieldItemsElement = this.formFieldItems.nativeElement;
      const children = formFieldItemsElement.children;

      for (let i = 0; i < children.length; i++) {
        this._renderer.removeChild(formFieldItemsElement, children.item(i));
      }

      this.formFieldItemQueryList.forEach((item) => {
        this._renderer.appendChild(formFieldItemsElement, item.elementRef.nativeElement);
      });
    }
  }
}
