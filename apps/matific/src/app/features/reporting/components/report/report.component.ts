import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NuguTableColumnInterface } from 'apps/matific/src/app/shared/components/table/table.component';

interface City {
  name: string;
  code: string;
}

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  noble: boolean;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    noble: false,
  },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', noble: true },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    noble: false,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    noble: false,
  },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', noble: false },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    noble: false,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    noble: false,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    noble: false,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    noble: false,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    noble: true,
  },
];

export const columns: NuguTableColumnInterface[] = [
  {
    name: 'position',
    title: 'position',
  },
  {
    name: 'name',
    title: 'Name',
  },
  {
    name: 'weight',
    title: 'Weight',
  },
  {
    name: 'symbol',
    title: 'Symbol',
  },
  {
    name: 'noble',
    title: 'Noble Gas',
  },
];

@Component({
  selector: 'nugu-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguReportComponent {

  cities: City[];

  data: PeriodicElement[] = ELEMENT_DATA;
  columns: NuguTableColumnInterface[] = columns;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  cityChanged(event: any) {
    console.log(event);
  }

  datePicked(event: any) {
    console.log(event);
  }
}
