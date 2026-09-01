import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TrackByFunction,
} from '@angular/core';
import { Bind } from 'primeng/bind';
import { Table, SortableColumn, SortIcon } from 'primeng/table';
import { NuguResultColorDirective } from '../../directives/result-color.directive';

export interface TableColumnInterface {
  name: string;
  title?: string;
}

@Component({
    selector: 'nugu-reporting-table',
    templateUrl: './reporting-table.component.html',
    styleUrls: ['./reporting-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Bind, Table, SortableColumn, SortIcon, NuguResultColorDirective]
})
export class NuguReportingTableComponent<T> {
  @Input()
  dataSource: any[] = [];

  @Input()
  columns: TableColumnInterface[] = [];

  @Input()
  trackBy: TrackByFunction<T>;

  @Input()
  studentSelectedWithRange: boolean = false;

  @Input()
  noDataMessageForStudent: string = '';
}
