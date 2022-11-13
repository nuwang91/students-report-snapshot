import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { NuguReportingTableComponent } from './reporting-table.component';
import { NuguResultColorDirective } from '../../directives/result-color.directive';

@NgModule({
  declarations: [NuguReportingTableComponent, NuguResultColorDirective],
  imports: [CommonModule, TableModule],
  exports: [NuguReportingTableComponent],
})
export class NuguReportingTableModule {}
