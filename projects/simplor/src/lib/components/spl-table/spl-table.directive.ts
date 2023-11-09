import {
  AfterContentInit,
  AfterViewInit,
  ContentChildren,
  DestroyRef,
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import { SplSortableColumnDirection } from './spl-sortable-column-control/spl-sortable-column-control.component';
import { SplSortableColumnDirective } from './spl-sortable-column.directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { CanUndefined } from '../../utils/type.util';

/**
 * SplTableDirective sort event.
 * This is used when setting sort or receiving a sortChange emitter.
 */
export interface SplTableSortChangeEvent {
  /** The name of the column. */
  name: string;

  /**
   * Current sort direction for the column.
   * You can use one of 'desc', 'asc', or 'none'.
   */
  direction: SplSortableColumnDirection;
}

/**
 * This is a Directive that applies Simplor’s design to the <table> element.
 * If you use SplSortableColumnDirective with the <th> element, you can receive an event according to the change in the column's sort direction.
 */
@Directive({
  selector: 'table[splTable]',
  host: {
    class: 'spl-table',
  },
  standalone: true,
})
export class SplTableDirective implements AfterContentInit, AfterViewInit, OnDestroy {
  /** An emitter that will emit a SplTableSortChangeEvent when the SplSortableColumnDirective is clicked and the sort changes. */
  @Output() sortChange = new EventEmitter<SplTableSortChangeEvent>();

  /** QueryList of SplSortableColumnDirective. */
  @ContentChildren(SplSortableColumnDirective, { descendants: true })
  sortableColumnQueryList!: QueryList<SplSortableColumnDirective>;

  /** A subscription to subscribe to the onClick emitter of SplSortableColumnDirective. */
  private _sortableColumnClickSubscription?: Subscription;

  constructor(private _destroyRef: DestroyRef) {}

  /** The sort currently applied to the table. */
  private _sort?: SplTableSortChangeEvent;

  /** Returns the sort currently applied to the table. */
  get sort(): CanUndefined<SplTableSortChangeEvent> {
    return this._sort;
  }

  /**
   * Sets the sort to apply to the table.
   * The direction of SplSortableColumnDirective also changes depending on sort.
   * @param value - SplTableSortChangeEvent to set.
   */
  @Input()
  set sort(value: SplTableSortChangeEvent) {
    this._sort = value;
    this.updateSortColumn(value);
  }

  ngAfterContentInit() {
    this._subscribeSortableColumnChanges();
    this._subscribeSortableColumnClick();
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.updateSortColumn(this.sort);
    }
  }

  ngOnDestroy() {
    this._sortableColumnClickSubscription?.unsubscribe();
  }

  /**
   * Changes the direction of SplSortableColumnDirective according to SplTableSortChangeEvent.
   * All columns other than SplTableSortChangeEvent.name are changed to none.
   * @param event - SplTableSortChangeEvent that will change the direction of SplSortableColumnDirective.
   */
  updateSortColumn(event: SplTableSortChangeEvent): void {
    const { name, direction } = event;

    this.sortableColumnQueryList?.forEach((sortableColumn) => {
      if (sortableColumn.controlComponentRef) {
        if (sortableColumn.name === name) {
          sortableColumn.controlComponentRef.instance.direction = direction;
        } else {
          sortableColumn.controlComponentRef.instance.direction = 'none';
        }

        sortableColumn.controlComponentRef.changeDetectorRef.detectChanges();
      }
    });
  }

  /**
   * Subscribes to changes in QueryList of SplSortableColumnDirective.
   * Whenever the QueryList changes, resubscribe to the SplSortableColumnDirective 's onClick emitter.
   */
  private _subscribeSortableColumnChanges(): void {
    this.sortableColumnQueryList.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._subscribeSortableColumnClick();
    });
  }

  /** Subscribes to the onClick emitter to emit a SplTableSortChangeEvent that changes due to the click event of the SplSortableColumnDirective. */
  private _subscribeSortableColumnClick(): void {
    const subscription = new Subscription();

    subscription.add(
      ...this.sortableColumnQueryList.map((sortableColumn) => {
        return sortableColumn.onClick.subscribe(() => {
          const name = sortableColumn.name;
          const currentDirection = sortableColumn.controlComponentRef?.instance.direction || 'none';
          let targetDirection: SplSortableColumnDirection;

          if (currentDirection === 'asc') {
            targetDirection = 'desc';
          } else if (currentDirection === 'desc' && sortableColumn.allowNoneDirection) {
            targetDirection = 'none';
          } else {
            targetDirection = 'asc';
          }

          const event: SplTableSortChangeEvent = {
            name,
            direction: targetDirection,
          };

          this.sortChange.emit(event);
        });
      }),
    );

    this._sortableColumnClickSubscription?.unsubscribe();
    this._sortableColumnClickSubscription = subscription;
  }
}
