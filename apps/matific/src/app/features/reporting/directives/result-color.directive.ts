import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[nuguResultColor]',
})
export class NuguResultColorDirective implements OnChanges {
  @Input()
  nuguResultColor: string;

  @HostBinding('style.color')
  color: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      !!changes['nuguResultColor'] &&
      !!changes['nuguResultColor'].currentValue
    ) {
      const transformToNumber: number = +this.nuguResultColor.split('%')[0];
      this.color = this._getColor(transformToNumber);
    }
  }

  private _getColor(marks: number): string {
    if (marks <= 60) return '#D90404';
    else if (marks > 60 && marks <= 80) return '#F26513';
    else if (marks > 80 && marks <= 90) return '#ffc107';
    else return '#4CAF50';
  }
}
