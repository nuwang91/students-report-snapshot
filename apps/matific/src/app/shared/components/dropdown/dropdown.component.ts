import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Bind } from 'primeng/bind';
import { Select } from 'primeng/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'nugu-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Bind, Select, ReactiveFormsModule, FormsModule]
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
