import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DepartmentsListComponent } from './departments-list.component';

describe('DepartmentsListComponent', () => {
  let component: DepartmentsListComponent;
  let fixture: ComponentFixture<DepartmentsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
