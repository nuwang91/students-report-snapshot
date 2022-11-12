import { ChangeDetectionStrategy, Component } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'nugu-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuguReportComponent {

  cities: City[];


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
}
