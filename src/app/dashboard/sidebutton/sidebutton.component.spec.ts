import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebuttonComponent } from './sidebutton.component';

describe('SidebuttonComponent', () => {
  let component: SidebuttonComponent;
  let fixture: ComponentFixture<SidebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
