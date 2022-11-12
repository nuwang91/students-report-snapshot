import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

import { NuguDatePickerComponent } from './date-picker.component';

@NgModule({
  declarations: [NuguDatePickerComponent],
  imports: [CommonModule, CalendarModule, FormsModule],
  exports: [NuguDatePickerComponent],
})
export class NuguDatePickerModule {}
