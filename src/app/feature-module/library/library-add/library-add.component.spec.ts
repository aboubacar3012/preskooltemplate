import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryAddComponent } from './library-add.component';

describe('LibraryAddComponent', () => {
  let component: LibraryAddComponent;
  let fixture: ComponentFixture<LibraryAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
