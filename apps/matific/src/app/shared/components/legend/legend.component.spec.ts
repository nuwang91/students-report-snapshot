import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguLegendComponent } from './legend.component';

describe('NuguLegendComponent', () => {
  let component: NuguLegendComponent;
  let fixture: ComponentFixture<NuguLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguLegendComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
