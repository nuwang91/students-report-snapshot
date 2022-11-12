import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguReportComponent } from './report.component';

describe('NuguReportComponent', () => {
  let component: NuguReportComponent;
  let fixture: ComponentFixture<NuguReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
