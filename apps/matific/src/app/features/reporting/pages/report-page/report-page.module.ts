import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';

import { NuguReportPageComponent } from './report-page.component';
import { NuguDropdownModule } from '@matific/shared/components/dropdown/dropdown.module';
import { NuguDatePickerModule } from '@matific/shared/components/date-picker/date-picker.module';
import { NuguStatusBarModule } from '../../components/status-bar/status-bar.module';
import { NuguReportingTableModule } from '../../components/reporting-table/reporting-table.module';

@NgModule({
  declarations: [NuguReportPageComponent],
  imports: [
    CommonModule,
    NuguDropdownModule,
    NuguDatePickerModule,
    NuguStatusBarModule,
    ChartModule,
    NuguReportingTableModule,
  ],
  exports: [NuguReportPageComponent],
})
export class NuguReportPageModule {}
