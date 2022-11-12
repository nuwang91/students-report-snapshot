import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuguStatusBarComponent } from './status-bar.component';
import { NuguProgressBarModule } from '@matific/shared/components/progress-bar/progress-bar.module';
import { NuguLegendModule } from '@matific/shared/components/legend/legend.module';

@NgModule({
  declarations: [NuguStatusBarComponent],
  imports: [
    CommonModule,
    NuguProgressBarModule,
    NuguLegendModule
  ],
  exports: [NuguStatusBarComponent]
})
export class NuguStatusBarModule { }
