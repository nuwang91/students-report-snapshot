import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { NuguTableComponent } from './table.component';

@NgModule({
  declarations: [NuguTableComponent],
  imports: [CommonModule, TableModule],
  exports: [NuguTableComponent],
})
export class NuguTableModule {}
