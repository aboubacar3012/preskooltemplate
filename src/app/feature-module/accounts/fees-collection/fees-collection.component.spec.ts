import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeesCollectionComponent } from './fees-collection.component';

describe('FeesCollectionComponent', () => {
  let component: FeesCollectionComponent;
  let fixture: ComponentFixture<FeesCollectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
