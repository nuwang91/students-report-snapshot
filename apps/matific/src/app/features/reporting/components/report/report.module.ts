import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuguReportComponent } from './report.component';
import { NuguDropdownModule } from 'apps/matific/src/app/shared/components/dropdown/dropdown.module';
import { NuguDatePickerModule } from 'apps/matific/src/app/shared/components/date-picker/date-picker.module';

@NgModule({
  declarations: [NuguReportComponent],
  imports: [CommonModule, NuguDropdownModule, NuguDatePickerModule],
  exports: [NuguReportComponent],
})
export class NuguReportModule {}
