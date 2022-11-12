import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguReportPageComponent } from './report-page.component';

describe('NuguReportPageComponent', () => {
  let component: NuguReportPageComponent;
  let fixture: ComponentFixture<NuguReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguReportPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
