import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HostelEditComponent } from './hostel-edit.component';

describe('HostelEditComponent', () => {
  let component: HostelEditComponent;
  let fixture: ComponentFixture<HostelEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HostelEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
