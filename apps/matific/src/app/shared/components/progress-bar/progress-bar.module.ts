import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuguProgressBarComponent } from './progress-bar.component';
import { NuguDirectivesModule } from '@matific/shared/directives/directives.module';
import { NuguLegendModule } from '../legend/legend.module';

@NgModule({
  declarations: [NuguProgressBarComponent],
  imports: [CommonModule, NuguDirectivesModule, NuguLegendModule],
  exports: [NuguProgressBarComponent],
})
export class NuguProgressBarModule {}
