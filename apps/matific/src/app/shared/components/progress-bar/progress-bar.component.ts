import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ILegend } from '../legend/legend.component';

export interface IProgressBar {
  status: string;
  color: string;
  percentage: number;
}

@Component({
  selector: 'nugu-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguProgressBarComponent {
  @Input()
  values: IProgressBar[] = [];

  _legendValues: ILegend[] = [];

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (!!changes['values'] && !!changes['values'].currentValue) {
  //     this._legendValues = this.values.map((value) => {
  //       return {
  //         status: value.status,
  //         color: value.color,
  //         percentage: value.percentage,
  //       };
  //     });
  //   }
  // }
}
