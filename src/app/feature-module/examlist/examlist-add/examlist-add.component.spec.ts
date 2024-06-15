import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamlistAddComponent } from './examlist-add.component';

describe('ExamlistAddComponent', () => {
  let component: ExamlistAddComponent;
  let fixture: ComponentFixture<ExamlistAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamlistAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamlistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
