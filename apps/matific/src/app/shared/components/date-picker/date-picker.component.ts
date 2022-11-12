import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'nugu-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguDatePickerComponent {
  @Input()
  id: string = '';

  @Input()
  value: Date;

  @Input()
  showIcon: boolean = false;

  @Output()
  readonly valueSelected: EventEmitter<any> = new EventEmitter<any>();

  onSelect(event: any) {
    this.valueSelected.emit(event);
  }
}
