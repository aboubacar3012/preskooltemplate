import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HostelMainComponent } from './hostel-main.component';

describe('HostelMainComponent', () => {
  let component: HostelMainComponent;
  let fixture: ComponentFixture<HostelMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
