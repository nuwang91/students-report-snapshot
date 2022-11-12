import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguDropdownComponent } from './dropdown.component';

describe('NuguDropdownComponent', () => {
  let component: NuguDropdownComponent;
  let fixture: ComponentFixture<NuguDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuguDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuguDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
