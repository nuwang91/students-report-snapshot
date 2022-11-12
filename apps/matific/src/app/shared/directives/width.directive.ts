import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[nuguWidth]',
})
export class NuguWidthDirective implements OnChanges {
  @Input()
  nuguWidth?: number;

  @HostBinding('style.width.px')
  width: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['nuguWidth'] && !!changes['nuguWidth'].currentValue) {
      this.width = this.nuguWidth ?? 0;
    }
  }
}
