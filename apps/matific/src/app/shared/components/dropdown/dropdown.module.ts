import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectModule } from 'primeng/select';

import { NuguDropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [NuguDropdownComponent],
  imports: [CommonModule, SelectModule, FormsModule],
  exports: [NuguDropdownComponent],
})
export class NuguDropdownModule {}
