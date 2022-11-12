import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuguProgressBarComponent } from './progress-bar.component';
import { NuguDirectivesModule } from '@matific/shared/directives/directives.module';

@NgModule({
  declarations: [NuguProgressBarComponent],
  imports: [CommonModule, NuguDirectivesModule],
  exports: [NuguProgressBarComponent],
})
export class NuguProgressBarModule {}
