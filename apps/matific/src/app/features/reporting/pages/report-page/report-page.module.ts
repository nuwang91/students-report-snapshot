import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { NuguReportPageComponent } from './report-page.component';
import { NuguDropdownModule } from '@matific/shared/components/dropdown/dropdown.module';
import { NuguDatePickerModule } from '@matific/shared/components/date-picker/date-picker.module';
import { NuguTableModule } from '@matific/shared/components/table/table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuguStatusBarModule } from '../../components/status-bar/status-bar.module';
import { NuguResultColorDirective } from '../../directives/result-color.directive';

@NgModule({
  declarations: [NuguReportPageComponent, NuguResultColorDirective],
  imports: [
    CommonModule,
    NuguDropdownModule,
    NuguDatePickerModule,
    NuguTableModule,
    ReactiveFormsModule,
    NuguStatusBarModule,
    TableModule
  ],
  exports: [NuguReportPageComponent]
})
export class NuguReportPageModule { }