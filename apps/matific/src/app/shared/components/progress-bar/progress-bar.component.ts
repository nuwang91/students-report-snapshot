import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NgStyle } from '@angular/common';

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
    imports: [NgStyle]
})
export class NuguProgressBarComponent {
  @Input()
  values: IProgressBar[] = [];

}
