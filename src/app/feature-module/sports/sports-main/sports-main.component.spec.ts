import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SportsMainComponent } from './sports-main.component';

describe('SportsMainComponent', () => {
  let component: SportsMainComponent;
  let fixture: ComponentFixture<SportsMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
