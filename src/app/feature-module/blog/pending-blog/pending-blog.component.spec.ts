import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBlogComponent } from './pending-blog.component';

describe('PendingBlogComponent', () => {
  let component: PendingBlogComponent;
  let fixture: ComponentFixture<PendingBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
