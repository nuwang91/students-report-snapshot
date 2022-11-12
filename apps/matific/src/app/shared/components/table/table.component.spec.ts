import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguTableComponent } from './table.component';

describe('NuguTableComponent', () => {
  let component: NuguTableComponent;
  let fixture: ComponentFixture<NuguTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
