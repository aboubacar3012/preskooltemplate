import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamlistMainComponent } from './examlist-main.component';

describe('ExamlistMainComponent', () => {
  let component: ExamlistMainComponent;
  let fixture: ComponentFixture<ExamlistMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamlistMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamlistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
