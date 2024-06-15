import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryMainComponent } from './library-main.component';

describe('LibraryMainComponent', () => {
  let component: LibraryMainComponent;
  let fixture: ComponentFixture<LibraryMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
