import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryEditComponent } from './library-edit.component';

describe('LibraryEditComponent', () => {
  let component: LibraryEditComponent;
  let fixture: ComponentFixture<LibraryEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
