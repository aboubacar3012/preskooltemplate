import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeesAddComponent } from './fees-add.component';

describe('FeesAddComponent', () => {
  let component: FeesAddComponent;
  let fixture: ComponentFixture<FeesAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
