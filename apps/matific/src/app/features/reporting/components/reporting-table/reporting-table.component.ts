import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TrackByFunction,
} from '@angular/core';

export interface TableColumnInterface {
  name: string;
  title?: string;
}

@Component({
  selector: 'nugu-reporting-table',
  templateUrl: './reporting-table.component.html',
  styleUrls: ['./reporting-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguReportingTableComponent<T> {
  @Input()
  dataSource: any[] = [];

  @Input()
  columns: TableColumnInterface[];

  @Input()
  trackBy: TrackByFunction<T>;

  @Input()
  studentSelectedWithRange: boolean = false;

  @Input()
  noDataMessageForStudent: string = '';
}
