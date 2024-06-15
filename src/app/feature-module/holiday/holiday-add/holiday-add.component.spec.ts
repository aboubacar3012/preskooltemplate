import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HolidayAddComponent } from './holiday-add.component';

describe('HolidayAddComponent', () => {
  let component: HolidayAddComponent;
  let fixture: ComponentFixture<HolidayAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
