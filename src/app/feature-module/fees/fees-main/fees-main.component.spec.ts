import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeesMainComponent } from './fees-main.component';

describe('FeesMainComponent', () => {
  let component: FeesMainComponent;
  let fixture: ComponentFixture<FeesMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
