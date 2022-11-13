import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguSpinnerComponent } from './spinner.component';

describe('NuguSpinnerComponent', () => {
  let component: NuguSpinnerComponent;
  let fixture: ComponentFixture<NuguSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
