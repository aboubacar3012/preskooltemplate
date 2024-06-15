import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersGridComponent } from './teachers-grid.component';

describe('TeachersGridComponent', () => {
  let component: TeachersGridComponent;
  let fixture: ComponentFixture<TeachersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
