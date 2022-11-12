import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nugu-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguReportComponent {}
