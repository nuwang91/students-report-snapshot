import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';

import { NuguDropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [NuguDropdownComponent],
  imports: [CommonModule, DropdownModule, FormsModule],
  exports: [NuguDropdownComponent],
})
export class NuguDropdownModule {}
