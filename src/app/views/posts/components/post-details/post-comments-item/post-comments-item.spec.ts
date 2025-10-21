import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentsItem } from './post-comments-item';

describe('PostCommentsItem', () => {
  let component: PostCommentsItem;
  let fixture: ComponentFixture<PostCommentsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCommentsItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCommentsItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
