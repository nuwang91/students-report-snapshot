import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuguAuthenticationComponent } from './authentication.component';

describe('NuguAuthenticationComponent', () => {
  let component: NuguAuthenticationComponent;
  let fixture: ComponentFixture<NuguAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NuguAuthenticationComponent],
}).compileComponents();

    fixture = TestBed.createComponent(NuguAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
