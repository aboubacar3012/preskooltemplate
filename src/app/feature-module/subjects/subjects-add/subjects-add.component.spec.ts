import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectsAddComponent } from './subjects-add.component';

describe('SubjectsAddComponent', () => {
  let component: SubjectsAddComponent;
  let fixture: ComponentFixture<SubjectsAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
