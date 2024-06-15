import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HolidayMainComponent } from './holiday-main.component';

describe('HolidayMainComponent', () => {
  let component: HolidayMainComponent;
  let fixture: ComponentFixture<HolidayMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
