import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Colors } from '../services/status-bar-transform.service';

@Directive({
  selector: '[nuguResultColor]',
})
export class NuguResultColorDirective implements OnChanges {
  @Input()
  nuguResultColor: string;

  @HostBinding('style.color')
  color: string;

  @HostBinding('style.font-weight')
  fontWeight: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      !!changes['nuguResultColor'] &&
      !!changes['nuguResultColor'].currentValue
    ) {
      const transformToNumber: number = +this.nuguResultColor.split('%')[0];
      this.color = this._getColor(transformToNumber);
      this.fontWeight = 'bold'
    }
  }

  private _getColor(marks: number): string {
    if (marks <= 60) return Colors['Weak'];
    else if (marks > 60 && marks <= 80) return Colors['OK'];
    else if (marks > 80 && marks <= 90) return Colors['Good'];
    else return Colors['Excellent'];
  }
}
