import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguProgressBarComponent } from './progress-bar.component';

describe('NuguProgressBarComponent', () => {
  let component: NuguProgressBarComponent;
  let fixture: ComponentFixture<NuguProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
