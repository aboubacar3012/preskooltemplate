import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersAddComponent } from './teachers-add.component';

describe('TeachersAddComponent', () => {
  let component: TeachersAddComponent;
  let fixture: ComponentFixture<TeachersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
