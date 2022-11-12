import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguDatePickerComponent } from './date-picker.component';

describe('NuguDatePickerComponent', () => {
  let component: NuguDatePickerComponent;
  let fixture: ComponentFixture<NuguDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguDatePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
