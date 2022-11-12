import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuguWidthDirective } from './width.directive';

@NgModule({
  declarations: [NuguWidthDirective],
  imports: [
    CommonModule
  ],
  exports: [NuguWidthDirective]
})
export class NuguDirectivesModule { }
