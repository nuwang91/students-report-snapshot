import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';

import { NuguReportPageComponent } from './report-page.component';
import { NuguDropdownModule } from '@matific/shared/components/dropdown/dropdown.module';
import { NuguDatePickerModule } from '@matific/shared/components/date-picker/date-picker.module';
import { NuguStatusBarModule } from '../../components/status-bar/status-bar.module';
import { NuguResultColorDirective } from '../../directives/result-color.directive';

@NgModule({
  declarations: [NuguReportPageComponent, NuguResultColorDirective],
  imports: [
    CommonModule,
    NuguDropdownModule,
    NuguDatePickerModule,
    NuguStatusBarModule,
    TableModule,
    ChartModule
  ],
  exports: [NuguReportPageComponent]
})
export class NuguReportPageModule { }
