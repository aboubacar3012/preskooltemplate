import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddExpensesComponent } from './add-expenses.component';

describe('AddExpensesComponent', () => {
  let component: AddExpensesComponent;
  let fixture: ComponentFixture<AddExpensesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
