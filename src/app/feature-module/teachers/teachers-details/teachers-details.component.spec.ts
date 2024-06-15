import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersDetailsComponent } from './teachers-details.component';

describe('TeachersDetailsComponent', () => {
  let component: TeachersDetailsComponent;
  let fixture: ComponentFixture<TeachersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
