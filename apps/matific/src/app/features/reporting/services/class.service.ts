import { Injectable } from '@angular/core';

import { filter, map, Observable, of, BehaviorSubject } from 'rxjs';

import { IClass } from '@matific/core/interfaces/common.interfaces';

@Injectable({
  providedIn: 'root',
})
export class NuguClassService {
  private _classesChanged$: BehaviorSubject<IClass[]> = new BehaviorSubject<
    IClass[]
  >([]);
  classesChanged$: Observable<IClass[]> = this._classesChanged$;
  private _classes: IClass[] = [];

  setClasses(classes: IClass[]): void {
    this._classes = classes;
    this._classesChanged$.next(this._classes.slice());
  }

  getClass$(className: string): Observable<IClass | undefined> {
    return of(this._classes.find((value) => value.name === className));
  }

  getAllStudentsInClass$(className: string): Observable<string[]> {
    return this.getClass$(className).pipe(
      filter((value): value is IClass => !!value),
      map((value) => value.students)
    );
  }
}
