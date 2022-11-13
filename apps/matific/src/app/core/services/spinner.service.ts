import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NuguSpinnerService {
  private _spinnerVisible$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  spinnerVisible$: Observable<boolean> = this._spinnerVisible$;

  spinning(state: boolean): void {
    this._spinnerVisible$.next(state);
  }
}
