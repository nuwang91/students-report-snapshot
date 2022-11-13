import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IFullActivity } from '@matific/core/interfaces/common.interfaces';
import { IProgressBar } from '@matific/shared/components/progress-bar/progress-bar.component';

export const Colors: Record<string, string> = {
  Weak: '#D90404',
  OK: '#F26513',
  Good: '#ffc107',
  Excellent: '#4CAF50',
};

export interface IBarDataSet {
  labels: string[];
  datasets: {
    backgroundColor: string[],
    data: number[]
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class NuguStatusBarTransformService {

  statusTransform$(activities: IFullActivity[]): Observable<IProgressBar[]> {
    if (activities.length === 0) {
      return of([]);
    }
    const progressTransformedData: IProgressBar[] = [];
    const totalActivities: number = activities.length;
    const categories = new Map([
      ['Weak', 0],
      ['OK', 0],
      ['Good', 0],
      ['Excellent', 0],
    ]);

    activities.forEach((activity) => {
      const marks: number = activity.result;
      if (marks <= 60) {
        const count: number = categories.get('Weak') ?? 0;
        categories.set('Weak', count + 1);
      } else if (marks > 60 && marks <= 80) {
        const count: number = categories.get('OK') ?? 0;
        categories.set('OK', count + 1);
      } else if (marks > 80 && marks <= 90) {
        const count: number = categories.get('Good') ?? 0;
        categories.set('Good', count + 1);
      } else {
        const count: number = categories.get('Excellent') ?? 0;
        categories.set('Excellent', count + 1);
      }
    });

    categories.forEach((v, k) => {
      if (v) {
        progressTransformedData.push({
          status: k,
          percentage: +((v / totalActivities) * 100).toFixed(2),
          color: Colors[k],
        });
      }
    });

    return of(progressTransformedData);
  }

  getBarChartDataset$(bars: IProgressBar[]): Observable<IBarDataSet> {
    const data: IBarDataSet = {
      labels: ['Weak', 'Ok', 'Good', 'Excellent'],
      datasets: [
        {
          backgroundColor: [],
          data: []
        }
      ]
    };

    data.datasets[0].backgroundColor = bars.map((bar) => bar.color);
    data.datasets[0].data = bars.map((bar) => bar.percentage);

    return of(data);
  }
}
