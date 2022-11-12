import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

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

}
