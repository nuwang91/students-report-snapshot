import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguReportingTableComponent } from './reporting-table.component';

describe('NuguReportingTableComponent', () => {
  let component: NuguReportingTableComponent;
  let fixture: ComponentFixture<NuguReportingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NuguReportingTableComponent],
}).compileComponents();

    fixture = TestBed.createComponent(NuguReportingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
