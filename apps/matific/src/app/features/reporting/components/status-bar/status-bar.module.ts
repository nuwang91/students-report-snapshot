import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuguStatusBarComponent } from './status-bar.component';

@NgModule({
  declarations: [NuguStatusBarComponent],
  imports: [
    CommonModule
  ],
  exports: [NuguStatusBarComponent]
})
export class NuguStatusBarModule { }
