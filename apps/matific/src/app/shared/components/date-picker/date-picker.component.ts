import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Bind } from 'primeng/bind';
import { DatePicker } from 'primeng/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'nugu-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Bind, DatePicker, ReactiveFormsModule, FormsModule]
})
export class NuguDatePickerComponent {
  @Input()
  id: string = '';

  @Input()
  value: Date;

  @Input()
  showIcon: boolean = false;

  @Input()
  showButtonBar: boolean = true;

  @Input()
  dateFormat: string = 'dd-mm-yy';

  @Output()
  readonly valueSelected: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  readonly valueChanged: EventEmitter<Date | null> = new EventEmitter<Date | null>();

  onSelect(event: any) {
    this.valueSelected.emit(event);
  }

  onClose() {
    this.valueChanged.emit(this.value);
  }
}
