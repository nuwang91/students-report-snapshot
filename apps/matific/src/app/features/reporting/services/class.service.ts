import { Injectable } from '@angular/core';
import { IClass } from '@matific/core/interfaces/common';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private _classesChanged: Subject<IClass[]> = new Subject<IClass[]>();
  classesChanged: Observable<IClass[]> = this._classesChanged;
  private _classes: IClass[] = [];

  setClasses(classes: IClass[]): void {
    this._classes = classes;
    this._classesChanged.next(this._classes.slice());
  }

  getClass$(className: string): Observable<IClass | undefined> {
    return of(this._classes.find((value) => value.name === className));
  }

}
