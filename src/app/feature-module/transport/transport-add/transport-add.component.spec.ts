import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TransportAddComponent } from './transport-add.component';

describe('TransportAddComponent', () => {
  let component: TransportAddComponent;
  let fixture: ComponentFixture<TransportAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
