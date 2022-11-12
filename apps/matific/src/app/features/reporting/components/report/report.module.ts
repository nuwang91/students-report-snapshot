import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuguReportComponent } from './report.component';
import { NuguDropdownModule } from 'apps/matific/src/app/shared/components/dropdown/dropdown.module';

@NgModule({
  declarations: [NuguReportComponent],
  imports: [CommonModule, NuguDropdownModule],
  exports: [NuguReportComponent],
})
export class NuguReportModule {}
