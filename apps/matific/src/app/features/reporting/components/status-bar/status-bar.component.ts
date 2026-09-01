import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ILegend } from '@matific/shared/components/legend/legend.component';
import { IProgressBar } from '@matific/shared/components/progress-bar/progress-bar.component';
import { NuguProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar.component';
import { NuguLegendComponent } from '../../../../shared/components/legend/legend.component';

@Component({
    selector: 'nugu-status-bar',
    templateUrl: './status-bar.component.html',
    styleUrls: ['./status-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NuguProgressBarComponent, NuguLegendComponent]
})
export class NuguStatusBarComponent {
  @Input()
  values: IProgressBar[] = [];

  @Input()
  legendValues: ILegend[] = [];
}
