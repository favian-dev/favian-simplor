import { AfterViewInit, Component } from '@angular/core';
import {
  Nullable,
  RangedDate,
  SplBoxComponent,
  SplButtonDirective,
  SplCalendarComponent,
  SplCheckboxComponent,
  SplControlValidatorDirective,
  SplDateInputComponent,
  SplDrawerService,
  SplDrawerStartingDirection,
  SplErrorComponent,
  SplFlatButtonDirective,
  SplFormFieldComponent,
  SplHintComponent,
  SplHorizontalSliderComponent,
  SplInputDirective,
  SplLogger,
  SplMessageService,
  SplModalService,
  SplOptionComponent,
  SplOverlayService,
  SplPaginatorComponent,
  SplProgressBarComponent,
  SplRadioButtonComponent,
  SplRadioGroupComponent,
  SplSelectComponent,
  SplSortableColumnDirective,
  SplStrokeButtonDirective,
  SplTabComponent,
  SplTabContentDirective,
  SplTabGroupComponent,
  SplTabLabelDirective,
  SplTableDirective,
  SplTableSortChangeEvent,
  SplTextareaDirective,
  SplTimeInputComponent,
  SplToggleButtonComponent,
  SplToggleButtonGroupComponent,
} from '@favian/simplor';
import { TestOverlayComponent } from '../test-overlay/test-overlay.component';
import { TestModalComponent } from '../test-modal/test-modal.component';
import { THEMES } from '../../themes';
import { TestDrawerComponent } from '../test-drawer/test-drawer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SplInputDirective,
    SplTextareaDirective,
    SplSelectComponent,
    SplOptionComponent,
    SplCheckboxComponent,
    SplRadioGroupComponent,
    SplRadioButtonComponent,
    SplButtonDirective,
    SplFlatButtonDirective,
    SplStrokeButtonDirective,
    SplCalendarComponent,
    SplDateInputComponent,
    SplToggleButtonGroupComponent,
    SplToggleButtonComponent,
    SplTimeInputComponent,
    FormsModule,
    SplProgressBarComponent,
    SplTabGroupComponent,
    SplTabComponent,
    SplTabLabelDirective,
    SplTabContentDirective,
    SplHorizontalSliderComponent,
    SplPaginatorComponent,
    SplTableDirective,
    SplSortableColumnDirective,
    SplControlValidatorDirective,
    SplFormFieldComponent,
    SplBoxComponent,
    SplErrorComponent,
    SplHintComponent,
  ],
})
export class TestPageComponent implements AfterViewInit {
  private readonly _logger = new SplLogger('TestPageComponent');

  options = ['Banana', 'Orange', 'Apple', 'Kiwi', 'Mango', 'Grape', 'Strawberry'];

  date: Nullable<Date> = null;

  rangedDates: RangedDate = [null, null];

  multiDates: Date[] = [];

  time = '23:42';

  startDate: Nullable<Date> = null;
  endDate: Nullable<Date> = null;

  tabs = [1, 2, 3];
  manyTabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  page = 1;
  size = 10;
  total = 58902398;

  data = [1, 2, 3, 4, 5];

  sort: SplTableSortChangeEvent = {
    name: 'number',
    direction: 'desc',
  };

  requiredValue = '';
  requiredValue2 = '';

  constructor(
    private _overlayService: SplOverlayService,
    private _modalService: SplModalService,
    private _messageService: SplMessageService,
    private _drawerService: SplDrawerService,
  ) {}

  ngAfterViewInit() {
    this._overlayService.open(TestOverlayComponent);
  }

  openModal(): void {
    this._modalService.open(TestModalComponent);
  }

  onFocus(): void {
    this._logger.debug('DatePicker focus');
  }

  onBlur(): void {
    this._logger.debug('DatePicker blur');
  }

  activeIndexChange(index: number): void {
    this._logger.debug('Active index has changed', index);
  }

  openMessage(): void {
    this._messageService.open('It is a message');
  }

  onSizeChange(size: number): void {
    this.size = size;
    this.page = 1;
  }

  openDrawer(side: SplDrawerStartingDirection): void {
    this._drawerService.open(TestDrawerComponent, {
      startingDirection: side,
    });
  }

  protected readonly THEMES = THEMES;
}
