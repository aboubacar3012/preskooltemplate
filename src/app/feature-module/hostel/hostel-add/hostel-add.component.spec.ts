import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HostelAddComponent } from './hostel-add.component';

describe('HostelAddComponent', () => {
  let component: HostelAddComponent;
  let fixture: ComponentFixture<HostelAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
