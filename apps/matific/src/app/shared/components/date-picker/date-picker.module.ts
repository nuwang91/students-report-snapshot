import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatePickerModule } from 'primeng/datepicker';

import { NuguDatePickerComponent } from './date-picker.component';

@NgModule({
  declarations: [NuguDatePickerComponent],
  imports: [CommonModule, DatePickerModule, FormsModule],
  exports: [NuguDatePickerComponent],
})
export class NuguDatePickerModule {}
