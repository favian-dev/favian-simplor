import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxExampleIComponent } from './box-example-i/box-example-i.component';
import { ButtonExampleIComponent } from './button-example-i/button-example-i.component';
import { CalendarExampleIComponent } from './calendar-example-i/calendar-example-i.component';
import { CalendarExampleIiComponent } from './calendar-example-ii/calendar-example-ii.component';
import { CalendarExampleIiiComponent } from './calendar-example-iii/calendar-example-iii.component';
import { CheckboxExampleIComponent } from './checkbox-example-i/checkbox-example-i.component';
import { ControlValidatorExampleIComponent } from './control-validator-example-i/control-validator-example-i.component';
import { DateInputExampleIComponent } from './date-input-example-i/date-input-example-i.component';
import { DateInputExampleIiComponent } from './date-input-example-ii/date-input-example-ii.component';
import { DateInputExampleIiiComponent } from './date-input-example-iii/date-input-example-iii.component';
import { CalendarExampleIvComponent } from './calendar-example-iv/calendar-example-iv.component';
import { DateInputExampleIvComponent } from './date-input-example-iv/date-input-example-iv.component';
import { DateInputExampleVComponent } from './date-input-example-v/date-input-example-v.component';
import { DrawerExampleIComponent } from './drawer-example-i/drawer-example-i.component';
import { DrawerExampleIiComponent } from './drawer-example-ii/drawer-example-ii.component';
import { DrawerExampleIiiComponent } from './drawer-example-iii/drawer-example-iii.component';
import { DrawerExampleIvComponent } from './drawer-example-iv/drawer-example-iv.component';
import { DrawerExampleVComponent } from './drawer-example-v/drawer-example-v.component';
import { EffectExampleIComponent } from './effect-example-i/effect-example-i.component';
import { FormFieldExampleIComponent } from './form-field-example-i/form-field-example-i.component';
import { FormFieldExampleIiComponent } from './form-field-example-ii/form-field-example-ii.component';
import { HorizontalSliderExampleIComponent } from './horizontal-slider-example-i/horizontal-slider-example-i.component';
import { HorizontalSliderExampleIiComponent } from './horizontal-slider-example-ii/horizontal-slider-example-ii.component';
import { IconExampleIComponent } from './icon-example-i/icon-example-i.component';
import { IconExampleIiComponent } from './icon-example-ii/icon-example-ii.component';
import { InputExampleIComponent } from './input-example-i/input-example-i.component';
import { MessageExampleIComponent } from './message-example-i/message-example-i.component';
import { DrawerExampleViComponent } from './drawer-example-vi/drawer-example-vi.component';
import { CalendarExampleVComponent } from './calendar-example-v/calendar-example-v.component';
import { ModalExampleIComponent } from './modal-example-i/modal-example-i.component';
import { ModalExampleIiComponent } from './modal-example-ii/modal-example-ii.component';
import { ModalExampleIiiComponent } from './modal-example-iii/modal-example-iii.component';
import { ModalExampleIvComponent } from './modal-example-iv/modal-example-iv.component';
import { ModalExampleVComponent } from './modal-example-v/modal-example-v.component';
import { ModalExampleViComponent } from './modal-example-vi/modal-example-vi.component';
import { ModalExampleViiComponent } from './modal-example-vii/modal-example-vii.component';
import { OverlayExampleIComponent } from './overlay-example-i/overlay-example-i.component';
import { OverlayExampleIiComponent } from './overlay-example-ii/overlay-example-ii.component';
import { OverlayExampleIiiComponent } from './overlay-example-iii/overlay-example-iii.component';
import { OverlayExampleIvComponent } from './overlay-example-iv/overlay-example-iv.component';
import { OverlayExampleVComponent } from './overlay-example-v/overlay-example-v.component';
import { OverlayExampleViComponent } from './overlay-example-vi/overlay-example-vi.component';
import { OverlayExampleViiComponent } from './overlay-example-vii/overlay-example-vii.component';
import { PaginatorExampleIComponent } from './paginator-example-i/paginator-example-i.component';
import { PaginatorExampleIiComponent } from './paginator-example-ii/paginator-example-ii.component';
import { PaginatorExampleIiiComponent } from './paginator-example-iii/paginator-example-iii.component';
import { ProgressBarExampleIComponent } from './progress-bar-example-i/progress-bar-example-i.component';
import { RadioGroupExampleIComponent } from './radio-group-example-i/radio-group-example-i.component';
import { RadioGroupExampleIiComponent } from './radio-group-example-ii/radio-group-example-ii.component';
import { SelectExampleIComponent } from './select-example-i/select-example-i.component';
import { SelectExampleIiComponent } from './select-example-ii/select-example-ii.component';
import { TabGroupExampleIComponent } from './tab-group-example-i/tab-group-example-i.component';
import { TabGroupExampleIiComponent } from './tab-group-example-ii/tab-group-example-ii.component';
import { TabGroupExampleIiiComponent } from './tab-group-example-iii/tab-group-example-iii.component';
import { TabGroupExampleIvComponent } from './tab-group-example-iv/tab-group-example-iv.component';
import { TabGroupExampleVComponent } from './tab-group-example-v/tab-group-example-v.component';
import { TableExampleIComponent } from './table-example-i/table-example-i.component';
import { TableExampleIiComponent } from './table-example-ii/table-example-ii.component';
import { TextareaExampleIComponent } from './textarea-example-i/textarea-example-i.component';
import { TimeInputExampleIComponent } from './time-input-example-i/time-input-example-i.component';
import { TimeInputExampleIiComponent } from './time-input-example-ii/time-input-example-ii.component';
import { ToggleButtonGroupExampleIComponent } from './toggle-button-group-example-i/toggle-button-group-example-i.component';
import { ToggleButtonGroupExampleIiComponent } from './toggle-button-group-example-ii/toggle-button-group-example-ii.component';
import { RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CanUndefined, Nullable, SplIconComponent } from '@favian/simplor';
import { IconExampleIiiComponent } from './icon-example-iii/icon-example-iii.component';

export interface UsageNavigationItem {
  hash: string;
  label: string;
  children?: UsageNavigationItem[];
}

@Component({
  selector: 'app-usage-page',
  templateUrl: './usage-page.component.html',
  styleUrls: ['./usage-page.component.scss'],
  host: {
    class: 'app-usage-page',
  },
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    BoxExampleIComponent,
    ButtonExampleIComponent,
    CalendarExampleIComponent,
    CalendarExampleIiComponent,
    CalendarExampleIiiComponent,
    CalendarExampleIvComponent,
    CalendarExampleVComponent,
    CheckboxExampleIComponent,
    ControlValidatorExampleIComponent,
    DateInputExampleIComponent,
    DateInputExampleIiComponent,
    DateInputExampleIiiComponent,
    CalendarExampleIvComponent,
    DateInputExampleIvComponent,
    DateInputExampleVComponent,
    DrawerExampleIComponent,
    DrawerExampleIiComponent,
    DrawerExampleIiiComponent,
    DrawerExampleIvComponent,
    DrawerExampleVComponent,
    DrawerExampleViComponent,
    EffectExampleIComponent,
    FormFieldExampleIComponent,
    FormFieldExampleIiComponent,
    HorizontalSliderExampleIComponent,
    HorizontalSliderExampleIiComponent,
    IconExampleIComponent,
    IconExampleIiComponent,
    InputExampleIComponent,
    MessageExampleIComponent,
    ModalExampleIComponent,
    ModalExampleIiComponent,
    ModalExampleIiiComponent,
    ModalExampleIvComponent,
    ModalExampleVComponent,
    ModalExampleViComponent,
    ModalExampleViiComponent,
    OverlayExampleIComponent,
    OverlayExampleIiComponent,
    OverlayExampleIiiComponent,
    OverlayExampleIvComponent,
    OverlayExampleVComponent,
    OverlayExampleViComponent,
    OverlayExampleViiComponent,
    PaginatorExampleIComponent,
    PaginatorExampleIiComponent,
    PaginatorExampleIiiComponent,
    ProgressBarExampleIComponent,
    RadioGroupExampleIComponent,
    RadioGroupExampleIiComponent,
    SelectExampleIComponent,
    SelectExampleIiComponent,
    TabGroupExampleIComponent,
    TabGroupExampleIiComponent,
    TabGroupExampleIiiComponent,
    TabGroupExampleIvComponent,
    TabGroupExampleVComponent,
    TableExampleIComponent,
    TableExampleIiComponent,
    TextareaExampleIComponent,
    TimeInputExampleIComponent,
    TimeInputExampleIiComponent,
    ToggleButtonGroupExampleIComponent,
    ToggleButtonGroupExampleIiComponent,
    RouterLink,
    MarkdownModule,
    SplIconComponent,
    IconExampleIiiComponent,
  ],
})
export class UsagePageComponent implements AfterViewInit {
  @ViewChild('usageAside', { read: ElementRef }) usageAsideRef!: ElementRef<HTMLElement>;
  @ViewChild('usageContent', { read: ElementRef }) usageContentRef!: ElementRef<HTMLElement>;

  navigations: UsageNavigationItem[] = [
    {
      hash: 'overview',
      label: 'Overview',
    },
    {
      hash: 'getting-started',
      label: 'Getting started',
    },
    {
      hash: 'css-variables',
      label: 'CSS Variables',
    },
    {
      hash: 'logger',
      label: 'Logger',
    },
    {
      hash: 'examples',
      label: 'Examples',
      children: [
        {
          hash: 'box',
          label: 'Box',
          children: [
            {
              hash: 'box-overview',
              label: 'Overview',
            },
            {
              hash: 'box-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'button',
          label: 'Button',
          children: [
            {
              hash: 'button-overview',
              label: 'Overview',
            },
            {
              hash: 'button-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'calendar',
          label: 'Calendar',
          children: [
            {
              hash: 'calendar-overview',
              label: 'Overview',
            },
            {
              hash: 'calendar-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'calendar-example-ii',
              label: 'Calendar types',
            },
            {
              hash: 'calendar-example-iii',
              label: 'Display date changes',
            },
            {
              hash: 'calendar-example-iv',
              label: 'Limit selectable dates',
            },
            {
              hash: 'calendar-example-v',
              label: 'Customize calendar',
            },
          ],
        },
        {
          hash: 'checkbox',
          label: 'Checkbox',
          children: [
            {
              hash: 'checkbox-overview',
              label: 'Overview',
            },
            {
              hash: 'checkbox-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'control-validator',
          label: 'ControlValidator',
          children: [
            {
              hash: 'control-validator-overview',
              label: 'Overview',
            },
            {
              hash: 'control-validator-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'date-input',
          label: 'DateInput',
          children: [
            {
              hash: 'date-input-overview',
              label: 'Overview',
            },
            {
              hash: 'date-input-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'date-input-example-ii',
              label: 'Limit selectable date',
            },
            {
              hash: 'date-input-example-iii',
              label: 'Limit input and selectable dates',
            },
            {
              hash: 'date-input-example-iv',
              label: 'Customize date input',
            },
            {
              hash: 'date-input-example-v',
              label: 'Customize date input and calendar',
            },
          ],
        },
        {
          hash: 'drawer',
          label: 'Drawer',
          children: [
            {
              hash: 'drawer-overview',
              label: 'Overview',
            },
            {
              hash: 'drawer-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'drawer-example-ii',
              label: 'SplDrawerRef',
            },
            {
              hash: 'drawer-example-iii',
              label: 'SPL_DRAWER_DATA',
            },
            {
              hash: 'drawer-example-iv',
              label: 'Handle result',
            },
            {
              hash: 'drawer-example-v',
              label: 'Custom classes and styles',
            },
            {
              hash: 'drawer-example-vi',
              label: 'Pass providers',
            },
          ],
        },
        {
          hash: 'effect',
          label: 'Effect',
          children: [
            {
              hash: 'effect-overview',
              label: 'Overview',
            },
            {
              hash: 'effect-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'form-field',
          label: 'FormField',
          children: [
            {
              hash: 'form-field-overview',
              label: 'Overview',
            },
            {
              hash: 'form-field-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'form-field-example-ii',
              label: 'With hints or errors',
            },
          ],
        },
        {
          hash: 'horizontal-slider',
          label: 'HorizontalSlider',
          children: [
            {
              hash: 'horizontal-slider-overview',
              label: 'Overview',
            },
            {
              hash: 'horizontal-slider-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'horizontal-slider-example-ii',
              label: 'Handle events',
            },
          ],
        },
        {
          hash: 'icon',
          label: 'Icon',
          children: [
            {
              hash: 'icon-overview',
              label: 'Overview',
            },
            {
              hash: 'icon-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'icon-example-ii',
              label: 'Font variables',
            },
            {
              hash: 'icon-example-iii',
              label: 'Customize icon default appearance',
            },
          ],
        },
        {
          hash: 'input',
          label: 'Input',
          children: [
            {
              hash: 'input-overview',
              label: 'Overview',
            },
            {
              hash: 'input-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'message',
          label: 'Message',
          children: [
            {
              hash: 'message-overview',
              label: 'Overview',
            },
            {
              hash: 'message-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'modal',
          label: 'Modal',
          children: [
            {
              hash: 'modal-overview',
              label: 'Overview',
            },
            {
              hash: 'modal-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'modal-example-ii',
              label: 'SplModalRef',
            },
            {
              hash: 'modal-example-iii',
              label: 'SPL_MODAL_DATA',
            },
            {
              hash: 'modal-example-iv',
              label: 'Handle result',
            },
            {
              hash: 'modal-example-v',
              label: 'Custom classes and styles',
            },
            {
              hash: 'modal-example-vi',
              label: 'Pass providers',
            },
            {
              hash: 'modal-example-vii',
              label: 'Use predefined modal components',
            },
          ],
        },
        {
          hash: 'overlay',
          label: 'Overlay',
          children: [
            {
              hash: 'overlay-overview',
              label: 'Overview',
            },
            {
              hash: 'overlay-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'overlay-example-ii',
              label: 'SplOverlayRef',
            },
            {
              hash: 'overlay-example-iii',
              label: 'SPL_OVERLAY_DATA',
            },
            {
              hash: 'overlay-example-iv',
              label: 'Handle result',
            },
            {
              hash: 'overlay-example-v',
              label: 'Custom classes and styles',
            },
            {
              hash: 'overlay-example-vi',
              label: 'Pass providers',
            },
            {
              hash: 'overlay-example-vii',
              label: `Update overlay's styles`,
            },
          ],
        },
        {
          hash: 'paginator',
          label: 'Paginator',
          children: [
            {
              hash: 'paginator-overview',
              label: 'Overview',
            },
            {
              hash: 'paginator-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'paginator-example-ii',
              label: 'Size options',
            },
            {
              hash: 'paginator-example-iii',
              label: 'Customize paginator',
            },
          ],
        },
        {
          hash: 'progress-bar',
          label: 'ProgressBar',
          children: [
            {
              hash: 'progress-bar-overview',
              label: 'Overview',
            },
            {
              hash: 'progress-bar-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'radio-group',
          label: 'RadioGroup',
          children: [
            {
              hash: 'radio-group-overview',
              label: 'Overview',
            },
            {
              hash: 'radio-group-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'radio-group-example-ii',
              label: 'Direction',
            },
          ],
        },
        {
          hash: 'select',
          label: 'Select',
          children: [
            {
              hash: 'select-overview',
              label: 'Overview',
            },
            {
              hash: 'select-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'select-example-ii',
              label: 'Label and value in option',
            },
          ],
        },
        {
          hash: 'tab-group',
          label: 'TabGroup',
          children: [
            {
              hash: 'tab-group-overview',
              label: 'Overview',
            },
            {
              hash: 'tab-group-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'tab-group-example-ii',
              label: 'Header alignments',
            },
            {
              hash: 'tab-group-example-iii',
              label: 'Control tab group',
            },
            {
              hash: 'tab-group-example-iv',
              label: 'ActiveIndex',
            },
            {
              hash: 'tab-group-example-v',
              label: 'Instant',
            },
          ],
        },
        {
          hash: 'table',
          label: 'Table',
          children: [
            {
              hash: 'table-overview',
              label: 'Overview',
            },
            {
              hash: 'table-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'table-example-ii',
              label: 'Sortable columns',
            },
          ],
        },
        {
          hash: 'textarea',
          label: 'Textarea',
          children: [
            {
              hash: 'textarea-overview',
              label: 'Overview',
            },
            {
              hash: 'textarea-example-i',
              label: 'Basic usage',
            },
          ],
        },
        {
          hash: 'time-input',
          label: 'TimeInput',
          children: [
            {
              hash: 'time-input-overview',
              label: 'Overview',
            },
            {
              hash: 'time-input-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'time-input-example-ii',
              label: 'Use 24 hours',
            },
          ],
        },
        {
          hash: 'toggle-button-group',
          label: 'ToggleButtonGroup',
          children: [
            {
              hash: 'toggle-button-group-overview',
              label: 'Overview',
            },
            {
              hash: 'toggle-button-group-example-i',
              label: 'Basic usage',
            },
            {
              hash: 'toggle-button-group-example-ii',
              label: 'Direction',
            },
          ],
        },
      ],
    },
  ];

  navigationOpened = false;
  highlightedNavigation?: string;

  private _headings: HTMLHeadingElement[] = [];

  private _preventScrollEvent = false;

  private readonly _headerHeight = 56;

  ngAfterViewInit() {
    this.usageContentRef.nativeElement.querySelectorAll('h1, h2, h3').forEach((heading) => {
      this._headings.push(heading as HTMLHeadingElement);
    });

    setTimeout(() => {
      this.setHighlightedNavigation();

      window.addEventListener('scroll', () => {
        if (!this._preventScrollEvent) {
          this.setHighlightedNavigation();
          this.scrollNavigation();
        }
      });

      window.addEventListener('scrollend', () => {
        this._preventScrollEvent = false;
      });
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.navigationOpened = false;
  }

  setHighlightedNavigation(): void {
    const nearestHeading = this.getNearestHeading();

    this.highlightedNavigation = nearestHeading?.id;
  }

  getHighlightedNavigation(): Nullable<HTMLElement> {
    if (this.highlightedNavigation) {
      return this.usageAsideRef.nativeElement.querySelector(`[data-id="${this.highlightedNavigation}"]`);
    } else {
      return null;
    }
  }

  getNearestHeading(): CanUndefined<HTMLHeadingElement> {
    const foundIndex = this._headings.findIndex((heading) => {
      const { top } = heading.getBoundingClientRect();

      return top >= this._headerHeight;
    });

    const index = foundIndex === 0 ? foundIndex : foundIndex - 1;

    return this._headings[index < 0 ? this._headings.length - 1 : index];
  }

  toHeading(hash: string): void {
    const heading = this.usageContentRef.nativeElement.querySelector(`#${hash}`);

    if (heading) {
      this.highlightedNavigation = heading.id;
      this._preventScrollEvent = true;
      this.navigationOpened = false;

      this.scrollNavigation();
      this.scrollContent(heading);
    }
  }

  scrollNavigation(): void {
    const highlightedNavigation = this.getHighlightedNavigation();

    if (highlightedNavigation) {
      const asideDomRect = this.usageAsideRef.nativeElement.getBoundingClientRect();
      const highlightedNavigationDomRect = highlightedNavigation.getBoundingClientRect();

      const actualTop = asideDomRect.top - highlightedNavigationDomRect.top;
      const { scrollTop } = this.usageAsideRef.nativeElement;

      this.usageAsideRef.nativeElement.scrollTo({
        top: scrollTop - actualTop - asideDomRect.height / 2,
      });
    }
  }

  scrollContent(heading: Element): void {
    const headingDomRect = heading.getBoundingClientRect();
    const { scrollY } = window;

    window.scrollTo({
      top: scrollY + headingDomRect.top - this._headerHeight,
      behavior: 'smooth',
    });
  }
}
