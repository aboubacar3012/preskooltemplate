import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventsMainComponent } from './events-main.component';

describe('EventsMainComponent', () => {
  let component: EventsMainComponent;
  let fixture: ComponentFixture<EventsMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
