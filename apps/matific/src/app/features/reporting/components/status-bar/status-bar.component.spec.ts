import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguStatusBarComponent } from './status-bar.component';

describe('NuguStatusBarComponent', () => {
  let component: NuguStatusBarComponent;
  let fixture: ComponentFixture<NuguStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguStatusBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
