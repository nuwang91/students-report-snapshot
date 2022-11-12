import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { ILegend } from '@matific/shared/components/legend/legend.component';
import { IProgressBar } from '@matific/shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'nugu-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguStatusBarComponent implements OnChanges {
  @Input()
  values: IProgressBar[] = [];

  _legendValues: ILegend[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['values'] && !!changes['values'].currentValue) {
      this._legendValues = this.values.map((value) => {
        return {
          status: value.status,
          color: value.color,
          percentage: value.percentage,
        };
      });
    }
  }
}
