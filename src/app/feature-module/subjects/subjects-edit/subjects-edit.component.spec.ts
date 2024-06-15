import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectsEditComponent } from './subjects-edit.component';

describe('SubjectsEditComponent', () => {
  let component: SubjectsEditComponent;
  let fixture: ComponentFixture<SubjectsEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
