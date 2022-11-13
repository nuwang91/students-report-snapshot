import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nugu-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguSpinnerComponent {}
