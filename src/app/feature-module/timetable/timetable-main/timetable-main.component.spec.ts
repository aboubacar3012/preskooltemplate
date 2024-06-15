import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimetableMainComponent } from './timetable-main.component';

describe('TimetableMainComponent', () => {
  let component: TimetableMainComponent;
  let fixture: ComponentFixture<TimetableMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
