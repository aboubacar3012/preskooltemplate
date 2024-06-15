import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SportsAddComponent } from './sports-add.component';

describe('SportsAddComponent', () => {
  let component: SportsAddComponent;
  let fixture: ComponentFixture<SportsAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
