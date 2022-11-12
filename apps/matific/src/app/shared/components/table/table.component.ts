import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface NuguTableColumnInterface {
  name: string;
  title?: string;
}

@Component({
  selector: 'nugu-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguTableComponent {
  @Input()
  dataSource: any[] = [];

  @Input()
  columns: NuguTableColumnInterface[] = [];
}
