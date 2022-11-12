import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nugu-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguStatusBarComponent {
}
