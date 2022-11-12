import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ILegend {
  status: string;
  color: string;
  percentage: number;
}

@Component({
  selector: 'nugu-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguLegendComponent {
  @Input()
  values: ILegend[] = [];
}
