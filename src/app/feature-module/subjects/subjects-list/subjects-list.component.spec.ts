import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectsListComponent } from './subjects-list.component';

describe('SubjectsListComponent', () => {
  let component: SubjectsListComponent;
  let fixture: ComponentFixture<SubjectsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
