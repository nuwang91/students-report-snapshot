import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'nugu-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguDropdownComponent {
  @Input()
  id: string = '';

  @Input()
  options: any[] = [];

  @Input()
  value: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  optionName: string = '';

  @Input()
  showClear: boolean = true;

  @Output()
  readonly valueChange: EventEmitter<any> = new EventEmitter<any>();

  onChange(event: any) {
    this.valueChange.emit(event);
  }
}
