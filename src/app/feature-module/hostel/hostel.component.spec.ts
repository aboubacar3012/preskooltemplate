import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HostelComponent } from './hostel.component';

describe('HostelComponent', () => {
  let component: HostelComponent;
  let fixture: ComponentFixture<HostelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
