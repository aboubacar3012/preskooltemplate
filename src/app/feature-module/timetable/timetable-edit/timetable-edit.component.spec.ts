import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimetableEditComponent } from './timetable-edit.component';

describe('TimetableEditComponent', () => {
  let component: TimetableEditComponent;
  let fixture: ComponentFixture<TimetableEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
